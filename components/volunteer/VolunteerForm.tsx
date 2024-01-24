export default function VolunteerForm() {
  return (
    <form
      className="w-full sm:w-[660px] mx-auto bg-white px-7 py-16 sm:p-10 my-10 flex flex-col gap-8 md:rounded-md"
      id="volunteer_form"
    >
      <div className="flex flex-col">
        <label htmlFor="fullname">Fullname</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-md duration-150 focus:border-gray-300 outline-none
          "
          name="fullname"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-md duration-150 focus:border-gray-300 outline-none
          "
          name="email"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          rows={4}
          cols={50}
          className="resize-none w-full border border-gray-300 p-2 rounded-md duration-150 focus:border-gray-300 outline-none
          "
          name="message"
        />
      </div>

      <button
        className={`bg-blue-500 md:w-56 md:mx-auto text-white rounded-[2rem] font-medium tracking-wide  py-3 hover:opacity-90 active:opacity-80 duration-100`}
      >
        Send message
      </button>
    </form>
  );
}
