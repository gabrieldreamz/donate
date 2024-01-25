"use client";

export default function VolunteerForm({
  register,
  handleSubmit,
  errors,
  isLoading,
  successMsg,
}: {
  register: any;
  handleSubmit: any;
  errors: any;
  isLoading: boolean;
  successMsg: boolean;
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:w-[660px] mx-auto bg-white px-7 py-16 sm:p-10 my-10 flex flex-col gap-7 md:rounded-md"
      id="volunteer_form"
    >
      <div className="flex flex-col">
        <label htmlFor="fullname">Fullname</label>
        <input
          {...register("fullname")}
          type="text"
          className="w-full border border-gray-300 p-2 rounded-md duration-150 focus:border-gray-300 outline-none
          "
          name="fullname"
        />
        {errors.fullname && (
          <p className="text-sm text-red-500">Please enter your name</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          type="text"
          className="w-full border border-gray-300 p-2 rounded-md duration-150 focus:border-gray-300 outline-none
          "
          name="email"
        />
        {errors.email && (
          <p className="text-sm text-red-500">
            Please enter a valid email address
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          rows={4}
          cols={50}
          className="resize-none w-full border border-gray-300 p-2 rounded-md duration-150 focus:border-gray-300 outline-none"
          {...register("message")}
          name="message"
        />
        {errors.message && (
          <p className="text-sm text-red-500">Please enter a message</p>
        )}
      </div>
      {successMsg && (
        <p className="text-green-500">
          Thank you for joining our volunteer program!
        </p>
      )}

      <button
        type="submit"
        className={`bg-blue-500 md:w-56 md:mx-auto text-white rounded-[2rem] font-medium tracking-wide  py-3 ${
          isLoading && "py-[8px]"
        } hover:opacity-90 active:opacity-80 duration-100`}
      >
        {isLoading ? <span className="loader2" /> : "Send message"}
      </button>
    </form>
  );
}
