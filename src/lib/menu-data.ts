import type { MenuItem } from './types';

export const menuData: MenuItem[] = [
  // Appetizers
  {
    id: 'app1',
    name: 'Bruschetta',
    description: 'Toasted bread with tomatoes, garlic, basil, and olive oil.',
    price: 9.5,
    image: 'https://placehold.co/600x400.png',
    category: 'Appetizer',
    tags: ['vegetarian'],
    aiHint: 'bruschetta'
  },
  {
    id: 'app2',
    name: 'Spicy Calamari',
    description: 'Fried calamari with a spicy marinara sauce.',
    price: 14.0,
    image: 'https://placehold.co/600x400.png',
    category: 'Appetizer',
    tags: ['spicy'],
    aiHint: 'fried calamari'
  },
  {
    id: 'app3',
    name: 'Caprese Salad',
    description: 'Fresh mozzarella, tomatoes, and basil with a balsamic glaze.',
    price: 11.0,
    image: 'https://placehold.co/600x400.png',
    category: 'Appetizer',
    tags: ['vegetarian', 'gluten-free'],
    aiHint: 'caprese salad'
  },
  // Main Courses
  {
    id: 'main1',
    name: 'Ribeye Steak',
    description: 'Aged 30 days, served with truffle mashed potatoes and grilled asparagus.',
    price: 45.0,
    image: 'https://placehold.co/600x400.png',
    category: 'Main Course',
    tags: ['gluten-free'],
    aiHint: 'ribeye steak'
  },
  {
    id: 'main2',
    name: 'Seared Scallops',
    description: 'With corn purée, brown butter vinaigrette, and seasonal vegetables.',
    price: 28.5,
    image: 'https://placehold.co/600x400.png',
    category: 'Main Course',
    tags: ['gluten-free'],
    aiHint: 'seared scallops'
  },
  {
    id: 'main3',
    name: 'Mushroom Risotto',
    description: 'Creamy Arborio rice with wild mushrooms, parmesan, and truffle oil.',
    price: 24.0,
    image: 'https://placehold.co/600x400.png',
    category: 'Main Course',
    tags: ['vegetarian', 'gluten-free'],
    aiHint: 'mushroom risotto'
  },
  {
    id: 'main4',
    name: 'Spicy Arrabiata',
    description: 'Penne pasta with a fiery tomato sauce, garlic, and red chili peppers.',
    price: 19.0,
    image: 'https://placehold.co/600x400.png',
    category: 'Main Course',
    tags: ['vegetarian', 'spicy'],
    aiHint: 'pasta arrabiata'
  },
  // Desserts
  {
    id: 'des1',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.',
    price: 10.0,
    image: 'https://placehold.co/600x400.png',
    category: 'Dessert',
    tags: [],
    aiHint: 'tiramisu'
  },
  {
    id: 'des2',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.',
    price: 12.0,
    image: 'https://placehold.co/600x400.png',
    category: 'Dessert',
    tags: [],
    aiHint: 'lava cake'
  },
  // Beverages
  {
    id: 'bev1',
    name: 'Sparkling Water',
    description: 'Imported mineral water.',
    price: 4.0,
    image: 'https://placehold.co/600x400.png',
    category: 'Beverage',
    tags: ['gluten-free'],
    aiHint: 'sparkling water'
  },
  {
    id: 'bev2',
    name: 'Fresh Lemonade',
    description: 'House-made with fresh lemons.',
    price: 5.0,
    image: 'https://placehold.co/600x400.png',
    category: 'Beverage',
    tags: ['gluten-free'],
    aiHint: 'lemonade glass'
  },
];
