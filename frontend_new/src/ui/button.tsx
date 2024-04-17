interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className="button">
            {children}
        </button>
    );
}
