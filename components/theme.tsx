import { useState, useEffect } from 'react'; import { useTheme } from 'next-themes';
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme: theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;

