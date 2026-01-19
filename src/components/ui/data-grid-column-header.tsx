import * as React from "react"
import { Table } from "@tanstack/react-table"
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface DataGridColumnHeaderProps<TData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    column?: any
    filter?: React.ReactNode
}

const DataGridColumnHeader = React.forwardRef<
    HTMLDivElement,
    DataGridColumnHeaderProps<any, any>
>(({ className, title, column, filter, ...props }, ref) => {
    if (!column) {
        return <div ref={ref} className={cn(className)} {...props}>{title}</div>
    }

    const handleSort = () => {
        if (!column.getCanSort()) return
        column.toggleSorting()
    }

    const isSorted = column.getIsSorted()

    return (
        <div
            ref={ref}
            className={cn("flex items-center gap-2", className)}
            {...props}
        >
            <Button
                variant="ghost"
                size="sm"
                onClick={handleSort}
                disabled={!column.getCanSort()}
                className="-ml-3 h-8 data-[state=open]:bg-accent"
            >
                <span>{title}</span>
                {column.getCanSort() && (
                    <>
                        {isSorted === "desc" && (
                            <ChevronDown className="ml-2 h-4 w-4" />
                        )}
                        {isSorted === "asc" && (
                            <ChevronUp className="ml-2 h-4 w-4" />
                        )}
                        {!isSorted && (
                            <ChevronsUpDown className="ml-2 h-4 w-4 text-gray-400" />
                        )}
                    </>
                )}
            </Button>
            {filter && <div className="ml-auto">{filter}</div>}
        </div>
    )
})
DataGridColumnHeader.displayName = "DataGridColumnHeader"

export { DataGridColumnHeader }
export type { DataGridColumnHeaderProps }
