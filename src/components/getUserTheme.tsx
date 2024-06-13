export const getUserTheme = () => {
    // Get preferred theme from local storage
    const userTheme = localStorage.getItem('theme');

    if (userTheme) {
        return userTheme;
    }

    const isDeviceUseDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme = isDeviceUseDarkMode ? 'dark' : 'light';

    // Save preferred theme to local storage
    localStorage.setItem('theme', theme);

    return theme;
};
