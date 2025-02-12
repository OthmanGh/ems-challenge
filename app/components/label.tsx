interface LabelProps {
  htmlFor: string;
  text: string;
  className?: string;
  required?: boolean;
}

const Label = ({
  htmlFor,
  text,
  className = "",
  required = true,
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm text-[#444] font-medium flex items-center gap-1 ${className}`}
    >
      <span>{text}</span>
      {required && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
