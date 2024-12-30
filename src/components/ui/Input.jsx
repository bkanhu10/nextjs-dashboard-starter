import { cn } from "@/lib/utils";
const Input = ({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  required,
  className,
  ...props
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        // className={`w-full rounded-md border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-950 ${props?.className}`}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:rounded file:border-0 file:bg-brand-800 file:text-sm file:font-normal file:text-white placeholder:text-xs placeholder:text-gray-400 hover:file:bg-brand-600 focus:border-transparent focus:ring-brand-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
    </>
  );
};

export default Input;
