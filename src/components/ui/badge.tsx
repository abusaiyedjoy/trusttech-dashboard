import * as React from "react"

import { cn } from "@/lib/utils"

const Badge = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        variant?: "default" | "primary" | "success" | "warning" | "destructive" | "info" | "outline"
        appearance?: "solid" | "light" | "outline"
        size?: "sm" | "md"
    }
>(
    (
        {
            className,
            variant = "default",
            appearance = "solid",
            size = "md",
            ...props
        },
        ref
    ) => {
        const variants = {
            default: {
                solid: "bg-gray-200 text-gray-900 dark:bg-[#2a2a2a] dark:text-gray-100",
                light: "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300",
                outline: "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
            },
            primary: {
                solid: "bg-blue-600 text-white",
                light: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
                outline: "border border-blue-300 text-blue-700 dark:border-blue-600 dark:text-blue-300",
            },
            success: {
                solid: "bg-green-600 text-white",
                light: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
                outline: "border border-green-300 text-green-700 dark:border-green-600 dark:text-green-300",
            },
            warning: {
                solid: "bg-orange-600 text-white",
                light: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
                outline: "border border-orange-300 text-orange-700 dark:border-orange-600 dark:text-orange-300",
            },
            destructive: {
                solid: "bg-red-600 text-white",
                light: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
                outline: "border border-red-300 text-red-700 dark:border-red-600 dark:text-red-300",
            },
            info: {
                solid: "bg-blue-600 text-white",
                light: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
                outline: "border border-blue-300 text-blue-700 dark:border-blue-600 dark:text-blue-300",
            },
        }

        const sizes = {
            sm: "px-2 py-1 text-xs",
            md: "px-3 py-1.5 text-sm",
        }

        const variantStyles = variants[variant] || variants.default
        const appearanceStyle = variantStyles[appearance] || variantStyles.solid
        const sizeStyle = sizes[size] || sizes.md

        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center font-medium rounded-full transition-colors",
                    sizeStyle,
                    appearanceStyle,
                    className
                )}
                {...props}
            />
        )
    }
)

Badge.displayName = "Badge"

export { Badge }
export type BadgeProps = React.ComponentPropsWithoutRef<typeof Badge>
