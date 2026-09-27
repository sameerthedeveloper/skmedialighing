import { DM_Mono, Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const mono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export const metadata = {
  title: { default: 'SK Media Lighting', template: '%s | SK Media Lighting' },
  description: 'Professional lighting and visual production for live events, venues and celebrations.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className={`${manrope.variable} ${playfair.variable} ${mono.variable} bg-paper font-sans text-ink`}>{children}</body></html>;
}
