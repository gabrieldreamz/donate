export default function ProgressBar() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center text-sm px-1">
        <span>$7500</span>
        <span>$10000</span>
      </div>

      <div className="w-full h-6 rounded-full bg-blue-100">
        <div
          className="h-6 rounded-full bg-blue-500"
          style={{ width: "45%" }}
        ></div>
      </div>

      <span className="px-1 text-sm flex justify-end">45%</span>
    </div>
  );
}
