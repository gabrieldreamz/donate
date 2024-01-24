import Link from "next/link";

import ActionsList from "./donation-plan-card-component/ActionsList";
import Description from "./donation-plan-card-component/Description";
import Title from "./donation-plan-card-component/Title";

// const listData = [{ title: "", tickColor: "", tickDiscription: [{}] }];

interface CardType {
  title: string;
  list: string[];
  description: string;
  link: string;
  btnTxt: string;
  btnColor: string;
}

export default function DonationPlanCard({
  title,
  list,
  description,
  link,
  btnTxt,
  btnColor,
}: CardType) {
  return (
    <div className="w-80 mob:w-96 md:h-[600px] px-5 py-7 bg-white rounded-xl flex flex-col lg:justify-between gap-7 md:gap-6">
      <Title title={title} />
      <ul className="flex flex-col gap-3">
        {list.map((list, i) => (
          <ActionsList list={list} key={i} />
        ))}
      </ul>
      <hr className="border border-gray-100" />
      <Description description={description} />
      <Link
        href={link}
        className={`text-center ${btnColor === "red" && "bg-red-500"} ${
          btnColor === "green" && "bg-green-500"
        } ${
          btnColor === "blue" && "bg-blue-500"
        } md:w-56 md:mx-auto text-white rounded-[2rem] font-medium tracking-wide  py-3 hover:opacity-90 active:opacity-80 duration-100`}
      >
        <button>{btnTxt}</button>
      </Link>
    </div>
  );
}
