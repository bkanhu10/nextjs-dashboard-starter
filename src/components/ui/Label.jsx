const Label = ({ htmlFor, children, ...props }) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={`mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300 ${props?.className}`}
        {...props}
      >
        {children}
      </label>
    </>
  );
};

export default Label;
