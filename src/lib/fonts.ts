import { Playfair_Display as FontHeadline, PT_Sans as FontBody } from 'next/font/google';

export const fontHeadline = FontHeadline({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: '700',
});

export const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700'],
});
