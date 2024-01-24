export default function VolunteerForm() {
  return (
    <form className="w-full sm:w-[660px] mx-auto bg-white p-7 sm:p-10 my-10 sm:my-20 flex flex-col gap-7 rounded-md">
      <div className="flex flex-col">
        <label htmlFor="fullname">Fullname</label>
        <input
          type="text"
          className="w-full border border-gray-200 p-2 rounded-md duration-150 focus:border-gray-300 outline-none
          "
          name="fullname"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="w-full border border-gray-200 p-2 rounded-md duration-150 focus:border-gray-300 outline-none
          "
          name="email"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <input
          type="text"
          className="w-full border border-gray-200 p-2 rounded-md duration-150 focus:border-gray-300 outline-none
          "
          name="message"
        />
      </div>
    </form>
  );
}
