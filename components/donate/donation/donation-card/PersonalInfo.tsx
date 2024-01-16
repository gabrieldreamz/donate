export default function PersonalInfo({ register }: { register: any }) {
  return (
    <section className="flex flex-col gap-3 mt-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col flex-1">
          <label
            className="text-dark/80 text-sm font-medium"
            htmlFor="fullname"
          >
            Full Name
          </label>
          <input
            className="p-2 sm:p-[5px] border rounded-none outline-none"
            type="text"
            name="fullname"
            {...register("fullname")}
          />
        </div>
        <div className="flex flex-col  flex-1">
          <label className="text-dark/80 text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="p-2 sm:p-[5px] border rounded-none outline-none"
            type="email"
            {...register("email")}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex flex-col flex-1">
          <label className="text-dark/80 text-sm font-medium" htmlFor="address">
            Address <span className="text-gray-500">(optional)</span>
          </label>
          <input
            className="p-2 sm:p-[5px] border rounded-none outline-none"
            type="text"
            name="address"
            {...register("address")}
          />
        </div>
        <div className="flex flex-col w-16">
          <label
            className="text-dark/80 text-sm font-medium"
            htmlFor="apartment"
          >
            Apt.
          </label>
          <input
            className="p-2 sm:p-[5px] border rounded-none outline-none"
            type="text"
            {...register("apt")}
          />
        </div>
      </div>
    </section>
  );
}
