import { TiTick } from "react-icons/ti";

export default function ActionsList({ list }: { list: string }) {
  return (
    <li className="flex items-start gap-2">
      <div className="text-green-500">
        <TiTick />
      </div>
      <p>{list}</p>
    </li>
  );
}
