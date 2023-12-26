export default function Title({
  number,
  description,
}: {
  number: number;
  description: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-5 h-5 bg-green-500 text-white rounded-[50%] flex items-center justify-center text-sm">
        {number}
      </span>
      <p className="text-dark/80 font-medium">{description}</p>
    </div>
  );
}
