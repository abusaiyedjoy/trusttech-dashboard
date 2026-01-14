'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useTheme as useNextTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
        </NextThemesProvider>
    );
};

export const useTheme = () => {
    const { theme, setTheme, systemTheme, resolvedTheme } = useNextTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return {
        theme: (theme as 'dark' | 'light' | undefined) || 'dark',
        toggleTheme,
        systemTheme,
        resolvedTheme,
        mounted,
    };
};