import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hover = true }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
            className={`
        bg-white/70 backdrop-blur-xl border border-white/40
        rounded-2xl shadow-lg shadow-slate-200/40
        hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20
        transition-all duration-300
        p-8
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
};
