import CenterCard from "@shared/CenterCard";

export default function Trust() {
  return (
    <section className="bg-gray-200 w-full p-5 lg:p-8">
      <CenterCard>
        <h1 className="text-2xl lg:text-3xl text-center">
          Trusted by Thousands of Volunters
        </h1>

        <div className="flex  items-center justify-center gap-6 lg:gap-44 mt-14 flex-wrap">
          <div className="flex lg:flex-col items-center gap-2">
            <h1 className="text-xl sm:text-2xl tracking-wide lg:text-4xl text-slate-500 font-medium">
              38k
            </h1>
            <p className="font-medium text-sm text-dark">Volunteers</p>
          </div>

          <div className="flex lg:flex-col items-center gap-2">
            <h1 className="text-xl sm:text-2xl tracking-wide lg:text-4xl text-slate-500 font-medium">
              470k
            </h1>
            <p className="font-medium text-sm text-dark">Donations</p>
          </div>

          <div className="flex lg:flex-col items-center gap-2 sm:hidden">
            <h1 className="text-xl sm:text-2xl tracking-wide lg:text-4xl text-slate-500 font-medium">
              25k
            </h1>
            <p className="font-medium text-sm text-dark">Collaborators</p>
          </div>

          <div className="flex lg:flex-col items-center gap-2">
            <h1 className="text-xl sm:text-2xl tracking-wide lg:text-4xl text-slate-500 font-medium">
              100+
            </h1>
            <p className="font-medium text-sm text-dark">Successful Events</p>
          </div>
        </div>
      </CenterCard>
    </section>
  );
}
