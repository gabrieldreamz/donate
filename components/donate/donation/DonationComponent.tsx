import CustomAmount from "./donation-card/CustomAmount";
import Options from "./donation-card/Options";
import PersonalInfo from "./donation-card/PersonalInfo";
import PriceCard from "./donation-card/PriceCard";
import Title from "./donation-card/Title";

const priceData = [25, 50, 100, 250, 500, 1000];

export default function DonationComponent() {
  return (
    <section className="sm:h-screen flex sm:items-center sm:justify-center py-10 sm:py-0 bg-white sm:bg-gray-100">
      <div className="p-5 sm:p-10 sm:bg-white sm:w-fit flex flex-col gap-3">
        <h1 className="text-xl font-medium">Hello There!</h1>
        <Title description="How much would you like to donate?" number={1} />
        <div className="flex gap-x-7 gap-y-4 flex-wrap max-w-md my-5">
          {priceData.map((price) => (
            <PriceCard price={price} key={price} />
          ))}
        </div>
        <CustomAmount />

        {/*Personal Details*/}
        <div className="mt-7 sm:mt-5">
          <Title description="Personal Info" number={2} />
          <PersonalInfo />
        </div>

        {/*Options*/}
        <Options />

        <button className="px-5 py-2 border-2 rounded-[2rem] mt-7 font-medium text-blue-500 border-blue-500 active:bg-blue-500 active:text-white duration-150">
          Donate with Debit or Credit Card
        </button>
      </div>
    </section>
  );
}
