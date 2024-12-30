const Select = ({
  name,
  id,
  onChange,
  value,
  defaultValue,
  required,
  children,
  placeholder,
  ...props
}) => {
  return (
    <>
      <select
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`w-full rounded-md border border-gray-300 p-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-950 ${props?.className}`}
      >
        {children}
      </select>
    </>
  );
};

export default Select;
