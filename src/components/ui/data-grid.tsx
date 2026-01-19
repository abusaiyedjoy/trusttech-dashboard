import * as React from "react"
import { Row, Table } from "@tanstack/react-table"

import { cn } from "@/lib/utils"

interface DataGridProps<TData> extends React.HTMLAttributes<HTMLDivElement> {
    table: Table<TData>
    recordCount?: number
    onRowClick?: (row: TData) => void
    tableLayout?: {
        columnsPinnable?: boolean
        columnsMovable?: boolean
        columnsVisibility?: boolean
        cellBorder?: boolean
    }
    children?: React.ReactNode
}

const DataGrid = React.forwardRef<HTMLDivElement, DataGridProps<any>>(
    (
        {
            className,
            table,
            recordCount,
            onRowClick,
            tableLayout = {},
            children,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "space-y-4 w-full",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        )
    }
)
DataGrid.displayName = "DataGrid"

export { DataGrid }
export type { DataGridProps }
