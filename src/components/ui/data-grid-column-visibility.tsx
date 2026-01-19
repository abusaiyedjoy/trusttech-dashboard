import * as React from "react"
import { Table } from "@tanstack/react-table"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DataGridColumnVisibilityProps<TData> {
    table: Table<TData>
    trigger?: React.ReactNode
}

const DataGridColumnVisibility = React.forwardRef<
    HTMLDivElement,
    DataGridColumnVisibilityProps<any>
>(({ table, trigger }, ref) => {
    const visibleColumns = table
        .getAllColumns()
        .filter((column) => column.getCanHide())

    return (
        <div ref={ref}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {trigger || (
                        <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                            Columns
                        </Button>
                    )}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                    {visibleColumns.map((column) => {
                        const header = column.columnDef.header
                        const title =
                            typeof header === "function"
                                ? "Column"
                                : typeof header === "string"
                                    ? header
                                    : column.id

                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                <span className="text-sm">{title}</span>
                            </DropdownMenuCheckboxItem>
                        )
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
})
DataGridColumnVisibility.displayName = "DataGridColumnVisibility"

export { DataGridColumnVisibility }
export type { DataGridColumnVisibilityProps }
