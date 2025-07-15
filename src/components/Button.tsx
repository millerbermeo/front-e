import React, { type JSX } from 'react'
import clsx from 'clsx'

interface ButtonsProps {
    children?: JSX.Element
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
}


const Button: React.FC<ButtonsProps> = ({
    children,
    onClick,
    className = '',
    type = 'button',
    disabled = false,
}) => {

    const defaultStyles = ''

    return (
        <button className={clsx(defaultStyles, className)} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button