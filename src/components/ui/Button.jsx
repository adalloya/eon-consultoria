import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    primary: 'bg-gradient-to-r from-primary to-slate-900 text-white hover:shadow-lg hover:shadow-primary/25 border border-transparent',
    secondary: 'bg-gradient-to-r from-secondary to-emerald-600 text-white hover:shadow-lg hover:shadow-secondary/25 border border-transparent',
    outline: 'border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary/5',
    ghost: 'text-slate-600 hover:text-primary hover:bg-primary/5',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
    disabled = false
}) => {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
        rounded-xl font-semibold transition-all duration-200 
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-2
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
      `}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </motion.button>
    );
};
