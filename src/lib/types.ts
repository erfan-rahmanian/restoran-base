export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'پیش غذا' | 'غذای اصلی' | 'دسر' | 'نوشیدنی';
  tags: ('vegetarian' | 'spicy' | 'gluten-free')[];
  aiHint?: string;
};

export type CartItem = {
  menuItem: MenuItem;
  quantity: number;
};
