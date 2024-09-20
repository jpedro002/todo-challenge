import React, { forwardRef } from 'react'
import style from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary-blue' | 'secondary-blue' | 'primary-red'
	size?: 'full' | 'half'
	children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = 'primary-blue',
			size = 'full',
			children,
			className = '',
			...props
		},
		ref,
	) => {
		const buttonStyle = `${style.button} ${style[variant]} ${style[size]} ${className}`

		return (
			<button ref={ref} className={buttonStyle} {...props}>
				{children}
			</button>
		)
	},
)

Button.displayName = 'Button'
