export default function WhyContact({
  register,
  errors,
  serverErr,
  msg,
}: {
  register: any;
  errors: any;
  serverErr: boolean;
  msg: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="details" className="text-lg text-dark font-medium">
        We&apos;d love to hear from you
      </label>
      <input
        type="text"
        placeholder="Why have you reached out to us?"
        name="details"
        {...register("message")}
        className={`${
          errors.message ? "border-red-400" : "border-gray-300"
        } bg-transparent border-b border-gray-300 rounded-none outline-none text-sm placeholder:text-sm placeholder:text-dark/70 py-1`}
      />
      <p
        className={`text-sm ${
          serverErr ? "text-red-500" : "text-green-500"
        } tracking-wide`}
      >
        {msg}
      </p>
    </div>
  );
}
