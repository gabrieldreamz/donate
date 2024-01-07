import CenterCard from "@shared/CenterCard";

export default function Trust() {
  return (
    <section className="bg-dark w-full px-5 py-12 md:py-20 lg:px-8">
      <CenterCard>
        <h1 className="text-2xl lg:text-4xl max-w-sm mx-auto text-center text-white">
          Trusted by Thousands of Volunters
        </h1>

        <div className="flex  items-center justify-center gap-6 lg:gap-44 mt-14 flex-wrap">
          <div className="flex lg:flex-col items-center gap-2">
            <h1 className="text-xl sm:text-2xl tracking-wide lg:text-4xl text-blue-500 font-medium">
              180
            </h1>
            <p className="font-medium text-sm text-white">Volunteers</p>
          </div>

          <div className="flex lg:flex-col items-center gap-2">
            <h1 className="text-xl sm:text-2xl tracking-wide lg:text-4xl text-blue-500 font-medium">
              32k
            </h1>
            <p className="font-medium text-sm text-white">Donations</p>
          </div>

          <div className="flex lg:flex-col items-center gap-2 sm:hidden">
            <h1 className="text-xl sm:text-2xl tracking-wide lg:text-4xl text-blue-500 font-medium">
              25
            </h1>
            <p className="font-medium text-sm text-white">Collaborators</p>
          </div>

          <div className="flex lg:flex-col items-center gap-2">
            <h1 className="text-xl sm:text-2xl tracking-wide lg:text-4xl text-blue-500 font-medium">
              1k+
            </h1>
            <p className="font-medium text-sm text-white">Successful Events</p>
          </div>
        </div>
      </CenterCard>
    </section>
  );
}
