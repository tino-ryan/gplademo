import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-light focus:ring-primary",
        secondary: "bg-secondary text-white hover:bg-secondary-light focus:ring-secondary",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
        white: "bg-white text-primary hover:bg-gray-100 focus:ring-white",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
