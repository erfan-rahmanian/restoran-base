'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { CartItem, MenuItem } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface AppContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (item: MenuItem, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.menuItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.menuItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prevCart, { menuItem: item, quantity }];
    });
    toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart.`,
    })
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.menuItem.id !== itemId));
     toast({
        title: "Item removed",
        description: "An item has been removed from your cart.",
        variant: "destructive"
    })
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.menuItem.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.menuItem.price * item.quantity, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getCartTotal,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useCart() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useCart must be used within an AppProvider');
  }
  return context;
}
