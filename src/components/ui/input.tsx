import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement> & {
        variant?: "default" | "sm"
    }
>(({ className, type, variant = "default", ...props }, ref) => (
    <input
        type={type}
        className={cn(
            "flex w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#2a2a2a] dark:bg-[#1a1a1a] dark:text-white dark:placeholder:text-gray-400 dark:focus-visible:ring-blue-500 dark:focus-visible:ring-offset-[#1a1a1a]",
            variant === "sm" && "py-1 text-xs",
            className
        )}
        ref={ref}
        {...props}
    />
))
Input.displayName = "Input"

const InputWrapper = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative flex items-center rounded-md border border-gray-200 bg-white dark:border-[#2a2a2a] dark:bg-[#1a1a1a] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-blue-500 has-[:focus-visible]:ring-offset-2 dark:has-[:focus-visible]:ring-offset-[#1a1a1a]",
            className
        )}
        {...props}
    />
))
InputWrapper.displayName = "InputWrapper"

export { Input, InputWrapper }
