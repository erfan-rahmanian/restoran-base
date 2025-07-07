import { Vazirmatn } from 'next/font/google';

export const fontBody = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-body',
  weight: ['400', '700'],
  display: 'swap',
});

export const fontHeadline = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-headline',
  weight: '700',
  display: 'swap',
});
