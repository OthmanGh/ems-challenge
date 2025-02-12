interface InputProps {
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  name,
  type,
  placeholder,
  className = "",
  defaultValue,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={`mt-1 block w-full rounded-md border py-2 px-4 placeholder:text-gray-400 ${className}`}
      onChange={onChange}
    />
  );
};

export default Input;
