import * as React from "react"
import { Table } from "@tanstack/react-table"

import { cn } from "@/lib/utils"

interface DataGridTableProps<TData> extends React.HTMLAttributes<HTMLTableElement> {
    table?: Table<TData>
}

const DataGridTable = React.forwardRef<
    HTMLTableElement,
    DataGridTableProps<any>
>(({ className, ...props }, ref) => (
    <table
        ref={ref}
        className={cn(
            "w-full border-collapse text-sm",
            className
        )}
        {...props}
    />
))
DataGridTable.displayName = "DataGridTable"

interface DataGridTableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> { }

const DataGridTableHeader = React.forwardRef<
    HTMLTableSectionElement,
    DataGridTableHeaderProps
>(({ className, ...props }, ref) => (
    <thead
        ref={ref}
        className={cn(
            "bg-gray-50 dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-[#2a2a2a]",
            className
        )}
        {...props}
    />
))
DataGridTableHeader.displayName = "DataGridTableHeader"

interface DataGridTableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> { }

const DataGridTableBody = React.forwardRef<
    HTMLTableSectionElement,
    DataGridTableBodyProps
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cn(
            "divide-y divide-gray-200 dark:divide-[#2a2a2a]",
            className
        )}
        {...props}
    />
))
DataGridTableBody.displayName = "DataGridTableBody"

interface DataGridTableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    isSelected?: boolean
}

const DataGridTableRow = React.forwardRef<
    HTMLTableRowElement,
    DataGridTableRowProps
>(({ className, isSelected, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            "hover:bg-gray-50 dark:hover:bg-[#0a0a0a] transition-colors",
            isSelected && "bg-blue-50 dark:bg-blue-900/20",
            className
        )}
        {...props}
    />
))
DataGridTableRow.displayName = "DataGridTableRow"

interface DataGridTableCellProps extends React.HTMLAttributes<HTMLTableCellElement> { }

const DataGridTableCell = React.forwardRef<
    HTMLTableCellElement,
    DataGridTableCellProps
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn(
            "px-4 py-3 text-sm text-gray-900 dark:text-white",
            className
        )}
        {...props}
    />
))
DataGridTableCell.displayName = "DataGridTableCell"

interface DataGridTableHeaderCellProps extends React.HTMLAttributes<HTMLTableCellElement> { }

const DataGridTableHeaderCell = React.forwardRef<
    HTMLTableCellElement,
    DataGridTableHeaderCellProps
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            "px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider",
            className
        )}
        {...props}
    />
))
DataGridTableHeaderCell.displayName = "DataGridTableHeaderCell"

interface DataGridTableRowSelectProps {
    row: any
}

const DataGridTableRowSelect = ({ row }: DataGridTableRowSelectProps) => (
    <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
        disabled={!row.getCanSelect()}
        className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a] text-blue-600 focus:ring-blue-500"
        aria-label="Select row"
    />
)

const DataGridTableRowSelectAll = ({ table }: any) => (
    <input
        type="checkbox"
        checked={table?.getIsAllPageRowsSelected()}
        onChange={table?.getToggleAllPageRowsSelectedHandler?.()}
        className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a] text-blue-600 focus:ring-blue-500"
        aria-label="Select all rows"
    />
)

export {
    DataGridTable,
    DataGridTableHeader,
    DataGridTableBody,
    DataGridTableRow,
    DataGridTableCell,
    DataGridTableHeaderCell,
    DataGridTableRowSelect,
    DataGridTableRowSelectAll,
}
export type {
    DataGridTableProps,
    DataGridTableHeaderProps,
    DataGridTableBodyProps,
    DataGridTableRowProps,
    DataGridTableCellProps,
    DataGridTableHeaderCellProps,
}
