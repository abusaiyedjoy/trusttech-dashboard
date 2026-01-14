'use client';

import { ChevronDown, Settings, X, LayoutGrid, Terminal, Lightbulb, Map, MessageSquare, Book, Github, Briefcase, Plus, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/context/Themecontext";


// Sidebar Component
const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const { theme, toggleTheme, mounted } = useTheme();
    const [activeProject, setActiveProject] = useState('autonomous-coding');
    const [activeItem, setActiveItem] = useState('Kanban Board');

    const projectItems = [
        { name: 'Kanban Board', icon: LayoutGrid, shortcut: 'K' },
        { name: 'Agent Terminals', icon: Terminal, shortcut: 'A' },
        { name: 'Insights', icon: Lightbulb, shortcut: 'I' },
        { name: 'Roadmap', icon: Map, shortcut: 'R' },
        { name: 'Ideation', icon: MessageSquare, shortcut: 'D' },
        { name: 'Changelog', icon: Book, shortcut: 'L' },
        { name: 'Context', icon: Book, shortcut: 'C' }
    ];

    const tools = [
        { name: 'GitHub Issues', icon: Github, shortcut: 'G' },
        { name: 'Worktrees', icon: Briefcase, shortcut: 'W' }
    ];

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={`
                fixed lg:static inset-y-0 left-0 z-50
                w-64 flex flex-col
                bg-white dark:bg-[#1a1a1a] border-r border-gray-200 dark:border-[#2a2a2a]
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-[#2a2a2a]">
                    <div className="flex w-full gap-2 justify-between items-center">
                        <span className="font-semibold text-gray-900 dark:text-white">Auto Claude</span>
                        <button
                            onClick={toggleTheme}
                            className="hidden md:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2a2a] text-gray-600 dark:text-gray-400 transition-all active:scale-95"
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                    <button
                        className="lg:hidden p-1 rounded hover:bg-gray-100 dark:hover:bg-[#2a2a2a] text-gray-600 dark:text-gray-400 transition-colors"
                        onClick={onClose}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-3">
                    <button className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 transition-colors group">
                        <div className="flex items-center gap-2">
                            <span className="text-base">📁</span>
                            <span className="text-sm font-medium">{activeProject}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-3 pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                    <div className="mb-6">
                        <div className="text-xs font-semibold mb-2 px-2 text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            Project
                        </div>
                        {projectItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => setActiveItem(item.name)}
                                className={`w-full flex items-center justify-between p-2 rounded-lg mb-1 transition-all ${activeItem === item.name
                                        ? 'bg-gray-100 dark:bg-[#2A2A1F] text-gray-900 dark:text-[#B2B363]'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#252525]'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon className="w-4 h-4" />
                                    <span className="text-sm font-medium">{item.name}</span>
                                </div>
                                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                                    {item.shortcut}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div>
                        <div className="text-xs font-semibold mb-2 px-2 text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            Tools
                        </div>
                        {tools.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => setActiveItem(item.name)}
                                className={`w-full flex items-center justify-between p-2 rounded-lg mb-1 transition-all ${activeItem === item.name
                                        ? 'bg-gray-100 dark:bg-[#2a2a2a] text-gray-900 dark:text-white'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#252525]'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon className="w-4 h-4" />
                                    <span className="text-sm font-medium">{item.name}</span>
                                </div>
                                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                                    {item.shortcut}
                                </span>
                            </button>
                        ))}
                    </div>
                </nav>

                <div className="border-t border-gray-200 dark:border-[#2a2a2a]">
                    <div className="p-3">
                        <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 transition-colors">
                            <Settings className="w-4 h-4" />
                            <span className="text-sm font-medium">Settings</span>
                        </button>
                    </div>
                    <div className="p-3 pt-0">
                        <button className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-medium transition-colors shadow-sm">
                            <Plus className="w-4 h-4" />
                            <span className="text-sm">New Task</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};
export default Sidebar;