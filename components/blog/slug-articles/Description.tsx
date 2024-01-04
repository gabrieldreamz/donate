export default function Description({ ArrText }: { ArrText: string[] }) {
  return (
    <div className="max-w-3xl flex flex-col gap-7">
      {ArrText?.map((text) => (
        <p className="text-medium font-medium text-dark/80">{text}</p>
      ))}
    </div>
  );
}
