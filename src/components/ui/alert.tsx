import * as React from "react"

import { cn } from "@/lib/utils"

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        variant?: "default" | "destructive" | "mono"
        icon?: "success" | "error" | "warning" | "info"
        close?: boolean
        onClose?: () => void
    }
>(({ className, variant = "default", icon, close, onClose, children, ...props }, ref) => {
    const variants = {
        default: "border-l-4 border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-900/30 dark:text-blue-300",
        destructive: "border-l-4 border-red-500 bg-red-50 text-red-900 dark:bg-red-900/30 dark:text-red-300",
        mono: "border border-gray-300 bg-gray-50 text-gray-900 dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-gray-300",
    }

    return (
        <div
            ref={ref}
            role="alert"
            className={cn(
                "relative w-full rounded-lg border p-4 flex items-start gap-3",
                variants[variant] || variants.default,
                className
            )}
            {...props}
        >
            <div className="flex-1">{children}</div>
            {close && (
                <button
                    onClick={onClose}
                    className="flex-shrink-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                    ✕
                </button>
            )}
        </div>
    )
})
Alert.displayName = "Alert"

const AlertIcon = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex-shrink-0 mt-0.5", className)}
        {...props}
    />
))
AlertIcon.displayName = "AlertIcon"

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn("mb-1 font-semibold leading-tight tracking-tight", className)}
        {...props}
    />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm", className)}
        {...props}
    />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertIcon, AlertTitle, AlertDescription }
