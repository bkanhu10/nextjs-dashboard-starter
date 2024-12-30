const ColorPreview = ({ color }) => {
  return (
    <div
      className={`h-6 w-6 rounded-full border p-2`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorPreview;
