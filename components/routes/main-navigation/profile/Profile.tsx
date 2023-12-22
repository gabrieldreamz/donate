import Link from "next/link";

export default function Profile() {
  return (
    <div className="flex items-center gap-6 order-3">
      <Link href="/donate">
        <button className="bg-dark btnConfig2">Donate</button>
      </Link>
    </div>
  );
}
