'use client';

import { useState } from 'react';
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="bg-gray-50 dark:bg-[#0f0f0f] min-h-screen">
            <div className="flex h-screen overflow-hidden">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header onMenuClick={() => setSidebarOpen(true)} />

                    <main className="flex-1 overflow-y-auto p-4 sm:p-6">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;