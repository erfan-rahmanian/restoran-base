export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Appetizer' | 'Main Course' | 'Dessert' | 'Beverage';
  tags: ('vegetarian' | 'spicy' | 'gluten-free')[];
  aiHint?: string;
};

export type CartItem = {
  menuItem: MenuItem;
  quantity: number;
};
