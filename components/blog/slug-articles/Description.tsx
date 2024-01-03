export default function Description({ ArrText }: { ArrText: string[] }) {
  return (
    <div>
      {ArrText.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
}
