'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { CartItem, MenuItem, AppUser } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { auth, db } from '@/lib/firebase';
import { 
  onAuthStateChanged,
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';


interface AppContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  user: AppUser | null;
  loading: boolean;
  signUp: (name: string, email: string, pass: string) => Promise<void>;
  logIn: (email: string, pass: string) => Promise<void>;
  logOut: () => Promise<void>;
  googleSignIn: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!auth || !db) {
      setLoading(false);
      return;
    };
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser && db) {
        const userRef = doc(db, 'users', firebaseUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUser(userSnap.data() as AppUser);
        } else {
          // برای کاربرانی که برای اولین بار با گوگل وارد می شوند، یک سند ایجاد کنید
          const newUser: AppUser = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
          };
          await setDoc(userRef, newUser);
          setUser(newUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

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
        title: "به سبد خرید اضافه شد",
        description: `${item.name} به سبد خرید شما اضافه شد.`,
    })
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.menuItem.id !== itemId));
     toast({
        title: "مورد حذف شد",
        description: "یک مورد از سبد خرید شما حذف شد.",
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

  const signUp = async (name: string, email: string, pass: string) => {
    if (!auth || !db) throw new Error("Firebase not initialized");
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    const firebaseUser = userCredential.user;
    
    await updateProfile(firebaseUser, { displayName: name });

    const newUser: AppUser = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: name,
    };
    await setDoc(doc(db, 'users', firebaseUser.uid), newUser);
    // onAuthStateChanged will handle setting the user state
  };

  const logIn = async (email: string, pass: string) => {
    if (!auth) throw new Error("Firebase not initialized");
    await signInWithEmailAndPassword(auth, email, pass);
  };

  const googleSignIn = async () => {
    if (!auth) throw new Error("Firebase not initialized");
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logOut = async () => {
    if (!auth) throw new Error("Firebase not initialized");
    await signOut(auth);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getCartTotal,
    user,
    loading,
    signUp,
    logIn,
    logOut,
    googleSignIn,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext باید در داخل یک AppProvider استفاده شود');
  }
  return context;
}
