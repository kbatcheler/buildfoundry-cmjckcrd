import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          Chatbot App
        </Link>
        <div>
          <button
            className="mr-4"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            Toggle Theme
          </button>
          <Link href="/about" className="mr-4">
            About
          </Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}