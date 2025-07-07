import type { MenuItem } from './types';

export const menuData: MenuItem[] = [
  // Appetizers
  {
    id: 'app1',
    name: 'بروسکتا',
    description: 'نان تست با گوجه، سیر، ریحان و روغن زیتون.',
    price: 9.5,
    image: 'https://placehold.co/600x400.png',
    category: 'پیش غذا',
    tags: ['vegetarian'],
    aiHint: 'bruschetta'
  },
  {
    id: 'app2',
    name: 'کالاماری تند',
    description: 'کالاماری سرخ شده با سس مارینارای تند.',
    price: 14.0,
    image: 'https://placehold.co/600x400.png',
    category: 'پیش غذا',
    tags: ['spicy'],
    aiHint: 'fried calamari'
  },
  {
    id: 'app3',
    name: 'سالاد کاپرزه',
    description: 'موزارلای تازه، گوجه و ریحان با سس بالزامیک.',
    price: 11.0,
    image: 'https://placehold.co/600x400.png',
    category: 'پیش غذا',
    tags: ['vegetarian', 'gluten-free'],
    aiHint: 'caprese salad'
  },
  // Main Courses
  {
    id: 'main1',
    name: 'استیک ریبای',
    description: '۳۰ روز خوابانده شده، سرو با پوره سیب‌زمینی ترافل و مارچوبه گریل شده.',
    price: 45.0,
    image: 'https://placehold.co/600x400.png',
    category: 'غذای اصلی',
    tags: ['gluten-free'],
    aiHint: 'ribeye steak'
  },
  {
    id: 'main2',
    name: 'اسکالپ دریایی',
    description: 'با پوره ذرت، سس کره قهوه‌ای و سبزیجات فصل.',
    price: 28.5,
    image: 'https://placehold.co/600x400.png',
    category: 'غذای اصلی',
    tags: ['gluten-free'],
    aiHint: 'seared scallops'
  },
  {
    id: 'main3',
    name: 'ریزوتو قارچ',
    description: 'برنج آربوریو خامه‌ای با قارچ وحشی، پارمزان و روغن ترافل.',
    price: 24.0,
    image: 'https://placehold.co/600x400.png',
    category: 'غذای اصلی',
    tags: ['vegetarian', 'gluten-free'],
    aiHint: 'mushroom risotto'
  },
  {
    id: 'main4',
    name: 'پاستا آرابیاتا تند',
    description: 'پاستا پنه با سس گوجه آتشین، سیر و فلفل قرمز.',
    price: 19.0,
    image: 'https://placehold.co/600x400.png',
    category: 'غذای اصلی',
    tags: ['vegetarian', 'spicy'],
    aiHint: 'pasta arrabiata'
  },
  // Desserts
  {
    id: 'des1',
    name: 'تیرامیسو',
    description: 'دسر کلاسیک ایتالیایی با بیسکویت لیدی فینگر آغشته به قهوه و کرم ماسکارپونه.',
    price: 10.0,
    image: 'https://placehold.co/600x400.png',
    category: 'دسر',
    tags: [],
    aiHint: 'tiramisu'
  },
  {
    id: 'des2',
    name: 'کیک شکلاتی مذاب',
    description: 'کیک شکلاتی گرم با مغز روان، سرو با بستنی وانیلی.',
    price: 12.0,
    image: 'https://placehold.co/600x400.png',
    category: 'دسر',
    tags: [],
    aiHint: 'lava cake'
  },
  // Beverages
  {
    id: 'bev1',
    name: 'آب گازدار',
    description: 'آب معدنی وارداتی.',
    price: 4.0,
    image: 'https://placehold.co/600x400.png',
    category: 'نوشیدنی',
    tags: ['gluten-free'],
    aiHint: 'sparkling water'
  },
  {
    id: 'bev2',
    name: 'لیموناد تازه',
    description: 'خانگی با لیموهای تازه.',
    price: 5.0,
    image: 'https://placehold.co/600x400.png',
    category: 'نوشیدنی',
    tags: ['gluten-free'],
    aiHint: 'lemonade glass'
  },
];
