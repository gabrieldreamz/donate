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
      <hr className="border border-purple-100" />
      <Description description={description} />
      <button
        className={`text-center bg-${btnColor}-500 md:w-56 md:mx-auto text-white rounded-[2rem] font-medium tracking-wide  py-3 hover:opacity-90 active:opacity-80 duration-100`}
      >
        <Link href={link}>{btnTxt}</Link>
      </button>
    </div>
  );
}
