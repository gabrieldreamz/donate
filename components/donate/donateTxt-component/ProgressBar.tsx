export default function ProgressBar() {
  return (
    <div className="w-full h-6 rounded-full bg-blue-100">
      <div
        className="h-6 rounded-full bg-blue-500"
        style={{ width: "45%" }}
      ></div>
    </div>
  );
}
