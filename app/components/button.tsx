// Button.tsx
interface ButtonProps {
  label: string;
  onClick?: (e: React.FormEvent) => void;
  className?: string;
  variant?: "primary" | "danger" | "secondary";
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
}

const Button = ({
  label,
  onClick,
  className,
  variant = "primary",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-white font-semibold transition-all duration-300 cursor-pointer";

  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600",
    danger: "bg-red-500 hover:bg-red-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
