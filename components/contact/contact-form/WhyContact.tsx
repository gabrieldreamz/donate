export default function WhyContact() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="details" className="text-lg text-dark font-medium">
        We&apos;d love to hear from you
      </label>
      <input
        type="text"
        placeholder="Why have you reached out to us?"
        name="details"
        className="bg-transparent border-b border-gray-300 rounded-none outline-none text-sm placeholder:text-sm placeholder:text-dark/70 py-1"
      />
    </div>
  );
}
