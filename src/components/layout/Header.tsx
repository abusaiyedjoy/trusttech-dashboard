'use client';

import { Menu, Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "@/context/Themecontext";

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
    const { theme, toggleTheme, mounted } = useTheme();

    if (!mounted) {
        return (
            <header className="sticky top-0 z-30 flex items-center justify-between h-14 px-4 sm:px-6 border-b bg-white dark:bg-[#1a1a1a] border-gray-200 dark:border-[#2a2a2a] backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
                <div className="flex items-center gap-3">
                    <button
                        className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2a2a] text-gray-600 dark:text-gray-400 transition-colors"
                        onClick={onMenuClick}
                        aria-label="Open menu"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                    <h1 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        autonomous-coding
                    </h1>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-9 h-9" />
                    
                    <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-[#2a2a2a] text-gray-600 dark:text-gray-400 transition-colors">
                        <span>Show archived</span>
                    </button>

                    <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2a2a] text-gray-600 dark:text-gray-400 transition-colors">
                        <Settings className="w-5 h-5" />
                    </button>
                </div>
            </header>
        );
    }

    return (
        <header className="sticky top-0 z-30 flex items-center justify-between h-14 px-4 sm:px-6 border-b bg-white dark:bg-[#1a1a1a] border-gray-200 dark:border-[#2a2a2a] backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
            <div className="flex items-center gap-3">
                <button
                    className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2a2a] text-gray-600 dark:text-gray-400 transition-colors"
                    onClick={onMenuClick}
                    aria-label="Open menu"
                >
                    <Menu className="w-5 h-5" />
                </button>
                <h1 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    autonomous-coding
                </h1>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={toggleTheme}
                    className=" md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2a2a] text-gray-600 dark:text-gray-400 transition-all active:scale-95"
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === 'dark' ? (
                        <Sun className="w-5 h-5" />
                    ) : (
                        <Moon className="w-5 h-5" />
                    )}
                </button>

                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2a2a] text-gray-600 dark:text-gray-400 transition-colors">
                    <Settings className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
};

export default Header;