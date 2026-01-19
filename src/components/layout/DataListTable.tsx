'use client';

import { useState } from 'react';
import {
    Search,
    Filter,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    MoreVertical,
    Plus,
    Download
} from 'lucide-react';

interface Task {
    id: string;
    taskName: string;
    description: string;
    status: 'Pending' | 'In Progress' | 'Completed';
    assignedAgent: string;
    createdTime: string;
    updatedTime: string;
}

const mockTasks: Task[] = [
    {
        id: '1',
        taskName: 'Design Homepage Layout',
        description: 'Create a modern and responsive homepage layout with hero section',
        status: 'Completed',
        assignedAgent: 'Agent Alpha',
        createdTime: '31 Jul, 2025',
        updatedTime: '31 Jul, 2025',
    },
    {
        id: '2',
        taskName: 'Implement Authentication',
        description: 'Set up user authentication with OAuth and JWT tokens',
        status: 'In Progress',
        assignedAgent: 'Agent Beta',
        createdTime: '30 Jul, 2025',
        updatedTime: '30 Jul, 2025',
    },
    {
        id: '3',
        taskName: 'Database Migration',
        description: 'Migrate database from MongoDB to PostgreSQL',
        status: 'Pending',
        assignedAgent: 'Agent Gamma',
        createdTime: '29 Jul, 2025',
        updatedTime: '29 Jul, 2025',
    },
    {
        id: '4',
        taskName: 'API Integration',
        description: 'Integrate third-party payment gateway API',
        status: 'In Progress',
        assignedAgent: 'Agent Delta',
        createdTime: '28 Jul, 2025',
        updatedTime: '28 Jul, 2025',
    },
    {
        id: '5',
        taskName: 'Performance Optimization',
        description: 'Optimize application performance and reduce load time',
        status: 'Completed',
        assignedAgent: 'Agent Epsilon',
        createdTime: '27 Jul, 2025',
        updatedTime: '27 Jul, 2025',
    },
    {
        id: '6',
        taskName: 'Mobile Responsiveness',
        description: 'Ensure all pages are fully responsive on mobile devices',
        status: 'Pending',
        assignedAgent: 'Agent Zeta',
        createdTime: '26 Jul, 2025',
        updatedTime: '26 Jul, 2025',
    },
    {
        id: '7',
        taskName: 'Security Audit',
        description: 'Conduct comprehensive security audit and fix vulnerabilities',
        status: 'In Progress',
        assignedAgent: 'Agent Eta',
        createdTime: '25 Jul, 2025',
        updatedTime: '25 Jul, 2025',
    },
    {
        id: '8',
        taskName: 'Documentation Update',
        description: 'Update technical documentation and API references',
        status: 'Completed',
        assignedAgent: 'Agent Theta',
        createdTime: '24 Jul, 2025',
        updatedTime: '24 Jul, 2025',
    },
];

const statusStyles = {
    Pending: 'bg-red-500/20 text-red-400 border-red-500/30',
    'In Progress': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    Completed: 'bg-green-500/20 text-green-400 border-green-500/30',
};

export function TaskTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('All');
    const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Filter tasks
    const filteredTasks = mockTasks.filter((task) => {
        const matchesSearch =
            task.taskName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.assignedAgent.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = statusFilter === 'All' || task.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    // Pagination
    const totalPages = Math.ceil(filteredTasks.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentTasks = filteredTasks.slice(startIndex, endIndex);

    // Count by status
    const statusCounts = {
        All: mockTasks.length,
        Pending: mockTasks.filter(t => t.status === 'Pending').length,
        'In Progress': mockTasks.filter(t => t.status === 'In Progress').length,
        Completed: mockTasks.filter(t => t.status === 'Completed').length,
    };

    const toggleTaskSelection = (id: string) => {
        setSelectedTasks(prev =>
            prev.includes(id) ? prev.filter(taskId => taskId !== id) : [...prev, id]
        );
    };

    const toggleAllTasks = () => {
        if (selectedTasks.length === currentTasks.length) {
            setSelectedTasks([]);
        } else {
            setSelectedTasks(currentTasks.map(task => task.id));
        }
    };

    return (
        <div className="w-full h-full">
            {/* Header */}

            {/* Filters and Actions Bar */}
            <div className="mb-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        Task List
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {filteredTasks.length} tasks found. {Math.round((statusCounts.Completed / statusCounts.All) * 100)}% are completed.
                    </p>
                </div>
                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-colors flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">Import</span>
                    </button>
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-yellow-400 hover:bg-yellow-500 text-black transition-colors flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        <span className="hidden sm:inline">Add Task</span>
                    </button>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="mb-4 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-colors flex items-center gap-2 justify-center">
                    <Filter className="w-4 h-4" />
                    Filters
                </button>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-200 dark:border-[#2a2a2a] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-[#2a2a2a]">
                            <tr>
                                <th className="w-12 px-4 py-3">
                                    <input
                                        type="checkbox"
                                        checked={selectedTasks.length === currentTasks.length && currentTasks.length > 0}
                                        onChange={toggleAllTasks}
                                        className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a]"
                                    />
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                    Task Info
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                    Assigned Agent
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                    Created
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                    Updated
                                </th>
                                <th className="w-12 px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-[#2a2a2a]">
                            {currentTasks.map((task) => (
                                <tr
                                    key={task.id}
                                    className="hover:bg-gray-50 dark:hover:bg-[#0a0a0a] transition-colors"
                                >
                                    <td className="px-4 py-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedTasks.includes(task.id)}
                                            onChange={() => toggleTaskSelection(task.id)}
                                            className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a]"
                                        />
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                {task.taskName}
                                            </span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                                {task.description}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${statusStyles[task.status]}`}>
                                            {task.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="text-sm text-gray-700 dark:text-gray-300">
                                            {task.assignedAgent}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            {task.createdTime}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            {task.updatedTime}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <button className="p-1 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] rounded transition-colors">
                                            <MoreVertical className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-4 py-3 border-t border-gray-200 dark:border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>Rows per page</span>
                        <select
                            value={rowsPerPage}
                            onChange={(e) => {
                                setRowsPerPage(Number(e.target.value));
                                setCurrentPage(1);
                            }}
                            className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            {startIndex + 1} - {Math.min(endIndex, filteredTasks.length)} of {filteredTasks.length}
                        </span>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-[#2a2a2a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${currentPage === page
                                            ? 'bg-blue-500 text-white'
                                            : 'hover:bg-gray-100 dark:hover:bg-[#2a2a2a] text-gray-600 dark:text-gray-400'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-[#2a2a2a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TaskTable;