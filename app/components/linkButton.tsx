import { Link } from "react-router";

interface LinkButtonProps {
  label: string;
  to: string;
  className?: string;
  variant?: "outline" | "solid";
}

const LinkButton = ({
  label,
  to,
  className,
  variant = "solid",
}: LinkButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-semibold text-center transition-all duration-300";
  const variantStyles = {
    solid: "bg-black/80 text-white hover:bg-black",
    outline: "border border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <Link
      to={to}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
