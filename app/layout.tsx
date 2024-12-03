import './globals.css';
import { Playfair_Display, Raleway } from 'next/font/google';
import { MobileNav } from '@/components/mobile-nav';
import { BackgroundMusic } from '@/components/global/audio-player';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata = {
  title: 'Nigerian Army Officer Wedding',
  description: 'Join us in celebrating our special day',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable}`}>
      <body className="font-body bg-background text-text antialiased pb-20">
        {children}
        <MobileNav />
        {/* <BackgroundMusic /> */}
      </body>
    </html>
  );
}