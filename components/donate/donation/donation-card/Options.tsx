export default function Options() {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <div>
        <div className="flex gap-2 items-center">
          <input type="checkbox" />
          <p className="text-sm font-medium text-dark/80">
            Make this an anonymous donation
          </p>
        </div>
        <p className="text-sm ml-6 text-gray-500">
          Your details won&apos;t be stored
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <input type="checkbox" />
        <p className="text-sm font-medium text-dark/80">
          Make this a monthly donation
        </p>
      </div>
    </div>
  );
}
