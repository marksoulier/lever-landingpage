import React from 'react';

interface ButtonProps {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    href,
    onClick
}) => {
    const baseStyles = 'text-base font-medium cursor-pointer rounded-[50px] flex items-center justify-center transition-all duration-300 ease-in-out';
    const variants = {
        primary: 'bg-[var(--primary-500)] text-white font-bold h-[60px] w-[250px] hover:bg-[var(--primary-600)]',
        outline: 'border-2 border-[var(--primary-500)] text-[var(--primary-500)] h-[45px] w-[150px] hover:bg-[var(--primary-500)] hover:text-white'
    };

    const handleClick = () => {
        if (href) {
            window.location.href = href;
        }
        onClick?.();
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
