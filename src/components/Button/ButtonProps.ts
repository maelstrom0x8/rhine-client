import React from "react"


export type ButtonProps = {
    children?: React.ReactNode
    text?: string
    className?: string
    handleClick?: () => void
}