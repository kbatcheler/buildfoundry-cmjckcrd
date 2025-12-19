import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chatbot App',
  description: 'A modern chatbot application with FAQ and dark mode.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>        
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}