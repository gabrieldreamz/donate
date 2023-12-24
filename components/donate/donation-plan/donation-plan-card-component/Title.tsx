export default function Title({ title }: { title: string }) {
  return (
    <h1 className="text-center text-xl font-medium my-3 md:mb-0">{title}</h1>
  );
}
