const StatCard = ({ number, icon, title, percentage }) => {
  return (
    <div className="border-stroke rounded-sm border bg-white px-8 py-8 shadow shadow-brand-950/10">
      <div className="flex flex-col justify-between">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-950/10 p-2">
          {icon}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-2xl font-bold text-slate-950 dark:text-white">
              {number}
            </h4>
            <span className="text-sm font-medium text-slate-600">{title}</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-slate-600">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
