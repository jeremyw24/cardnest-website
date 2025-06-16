export type Theme = 'light' | 'dark' | 'system';

export class ThemeManager {
  private static readonly STORAGE_KEY = 'theme';
  private static readonly DARK_CLASS = 'dark';

  /**
   * Get the current theme from localStorage or default to 'system'
   */
  static getStoredTheme(): Theme {
    if (typeof localStorage === 'undefined') return 'system';
    return (localStorage.getItem(this.STORAGE_KEY) as Theme) || 'system';
  }

  /**
   * Save theme preference to localStorage
   */
  static setStoredTheme(theme: Theme): void {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(this.STORAGE_KEY, theme);
  }

  /**
   * Check if the system prefers dark mode
   */
  static getSystemPreference(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /**
   * Determine if dark mode should be active based on current theme setting
   */
  static shouldUseDarkMode(theme: Theme = this.getStoredTheme()): boolean {
    if (theme === 'dark') return true;
    if (theme === 'light') return false;
    return this.getSystemPreference();
  }

  /**
   * Apply the dark class to the HTML element based on the theme
   */
  static applyTheme(theme: Theme = this.getStoredTheme()): void {
    if (typeof document === 'undefined') return;

    const html = document.documentElement;
    const shouldBeDark = this.shouldUseDarkMode(theme);

    if (shouldBeDark) {
      html.classList.add(this.DARK_CLASS);
    } else {
      html.classList.remove(this.DARK_CLASS);
    }
  }

  /**
   * Set a new theme and apply it
   */
  static setTheme(theme: Theme): void {
    this.setStoredTheme(theme);
    this.applyTheme(theme);
  }

  /**
   * Toggle between light and dark themes (skipping system)
   */
  static toggleTheme(): void {
    const currentTheme = this.getStoredTheme();
    const isDarkActive = this.shouldUseDarkMode(currentTheme);
    const newTheme: Theme = isDarkActive ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  /**
   * Initialize theme on page load
   */
  static init(): void {
    // Apply the initial theme immediately
    this.applyTheme();

    // Listen for system theme changes
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleSystemThemeChange = () => {
        const currentTheme = this.getStoredTheme();
        if (currentTheme === 'system') {
          this.applyTheme('system');
        }
      };

      // Modern browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleSystemThemeChange);
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handleSystemThemeChange);
      }
    }
  }
}

// Initialize theme immediately when this module is imported
if (typeof document !== 'undefined') {
  ThemeManager.init();
}
