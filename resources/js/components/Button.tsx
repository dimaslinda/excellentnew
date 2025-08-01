interface ButtonProps {
    href?: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ href, children, className = '', onClick, type = 'button', variant = 'primary', size = 'md' }) => {
    const baseClasses =
        'inline-flex items-center justify-center font-bold transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg focus:ring-4 focus:outline-none';

    const variantClasses = {
        primary: 'bg-[#FFB43F] text-white hover:bg-[#FFB43F]/90 focus:ring-[#FFB43F]/80',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500/80',
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-3 text-base',
        lg: 'px-10 py-4 text-lg',
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href) {
        return (
            <a href={href} target="_blank" className={combinedClasses}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClasses}>
            {children}
        </button>
    );
};

export default Button;
