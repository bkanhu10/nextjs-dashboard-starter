import { cn } from "@/lib/utils";

const Button = ({
  children,
  variant = "default",
  isLoading,
  className,
  ...props
}) => {
  const baseStyles =
    "w-full rounded-md px-3 py-3 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default: "bg-brand-950 hover:bg-brand-800 focus:ring-brand-950 text-white",
    outline:
      "bg-transparent border border-brand-950 text-brand-950 hover:bg-gray-800 hover:text-white focus:ring-brand-950",
    secondary:
      "bg-brand-100 hover:bg-brand-200 focus:ring-brand-100 text-brand-950",
    link: "",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      disabled={isLoading}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
