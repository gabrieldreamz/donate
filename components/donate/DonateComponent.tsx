import CenterCard from "@shared/CenterCard";
import DonateTxt from "./DonateTxt";
import DonateCompoImg from "./DonateCompoImg";

export default function DonateComponent() {
  return (
    <section>
      <CenterCard>
        <DonateTxt />
        <DonateCompoImg />
      </CenterCard>
    </section>
  );
}

// <div className="flex flex-col gap-7">
// <h1 className="text-3xl lg:text-4xl lg:max-w-md px-5 md:text-center lg:text-start lg:px-0 font-medium">
//   Donate for kids all over the world to make their lives better.
// </h1>

// <div className="flex flex-col gap-5 mx-auto lg:mx-0">
//   <div className="px-5">
//     <p className="flex justify-between">
//       <span>$7500</span>
//       <span>$10000</span>
//     </p>
//     <div className="w-full h-6 rounded-full bg-blue-100">
//       <div
//         className="h-6 rounded-full bg-blue-500"
//         style={{ width: "45%" }}
//       ></div>
//     </div>
//     <span className="">45%</span>
//   </div>

//   <p className="text-center lg:text-start max-w-xl">
//     We are hoping to get donations in order to fund important items
//     for the kids. We need your help to change this kids life
//   </p>

//   <div>
//     <span>50$</span>
//   </div>

//   <button>Donate now</button>

//   {/* Sharring content */}
//   <div>
//     <RiShareForwardFill />
//     <p>Share</p>
//   </div>
// </div>
// </div>
