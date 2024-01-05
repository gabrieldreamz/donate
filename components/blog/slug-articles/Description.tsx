export default function Description({ ArrText }: { ArrText: string[] }) {
  return (
    <div className="max-w-3xl flex flex-col gap-7 md:mt-20">
      {ArrText?.map((text) => (
        <p key={text} className="text-medium font-medium text-dark/80">
          {text}
        </p>
      ))}
    </div>
  );
}
