import Skeleton from "@/components/ui/Skeleton";

function SkeletonTable({ columns = 3, rows = 10 }) {
  const skeletonRows = Array.from({ length: rows }).map((_, rowIndex) => (
    <tr key={rowIndex}>
      {Array.from({ length: columns }).map((_, colIndex) => (
        <td key={colIndex} className="p-2">
          <Skeleton className="h-6 w-full" />
        </td>
      ))}
    </tr>
  ));

  return (
    <table className="w-full table-fixed border-collapse rounded-md bg-white">
      <tbody>{skeletonRows}</tbody>
    </table>
  );
}

export default SkeletonTable;
