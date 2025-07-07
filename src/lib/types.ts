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

// این نوع داده، اطلاعات کاربری را که در Firestore ذخیره می‌کنیم، نشان می‌دهد
export type AppUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
};
