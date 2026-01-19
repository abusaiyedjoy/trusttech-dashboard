import * as React from "react"
import { Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"

interface DataGridPaginationProps<TData> {
    table: Table<TData>
}

const DataGridPagination = React.forwardRef<
    HTMLDivElement,
    DataGridPaginationProps<any>
>(({ table }, ref) => {
    const pageCount = table.getPageCount()
    const pageIndex = table.getState().pagination.pageIndex
    const pageSize = table.getState().pagination.pageSize

    const totalRows = table.getFilteredRowModel().rows.length
    const startRow = pageIndex * pageSize + 1
    const endRow = Math.min((pageIndex + 1) * pageSize, totalRows)

    return (
        <div
            ref={ref}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4"
        >
            <div className="text-sm text-gray-600 dark:text-gray-400">
                {totalRows === 0 ? (
                    "No results"
                ) : (
                    <>
                        Showing <span className="font-semibold">{startRow}</span> to{" "}
                        <span className="font-semibold">{endRow}</span> of{" "}
                        <span className="font-semibold">{totalRows}</span> results
                    </>
                )}
            </div>

            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="icon-sm"
                    onClick={() => table.setPageIndex(0)}
                    disabled={pageIndex === 0}
                >
                    <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon-sm"
                    onClick={() => table.previousPage()}
                    disabled={pageIndex === 0}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-1">
                    {Array.from({ length: pageCount }, (_, i) => i).map((page) => (
                        <Button
                            key={page}
                            variant={pageIndex === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => table.setPageIndex(page)}
                            className="min-w-[32px]"
                        >
                            {page + 1}
                        </Button>
                    ))}
                </div>

                <Button
                    variant="outline"
                    size="icon-sm"
                    onClick={() => table.nextPage()}
                    disabled={pageIndex === pageCount - 1}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon-sm"
                    onClick={() => table.setPageIndex(pageCount - 1)}
                    disabled={pageIndex === pageCount - 1}
                >
                    <ChevronsRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
})
DataGridPagination.displayName = "DataGridPagination"

export { DataGridPagination }
export type { DataGridPaginationProps }
