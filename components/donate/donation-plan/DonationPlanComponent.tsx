import DonationPlanCard from "./DonationPlanCard";
import DonationPlanIntro from "./DonationPlanIntro";

const CardData = [
  {
    title: "One-time Donation",
    list: [
      "Donation appointed directly to a project in need",
      "Just-on-time donations secure development",
      "More people benefit from our projects",
    ],
    description:
      "There is no such thing as a small contribution! every contribution count! When you make a one-time donation to Global Ahead, we make sure to securely assign your donation to a project within our organization with the most urgent need. Effectively, your donation reflects on medical and school supplies, equipment and machinery to construction sites in places of vulnerability.",
    link: "",
    btnTxt: "Donate once",
    btnColor: "green",
  },
  {
    title: "Monthly Donation",
    list: [
      "Supplies delivered on time",
      "Operations expand to new locations",
      "New projects are developed",
    ],
    description:
      "More than a well-executed project, we want to see permanent benefits impacting where your donation reaches. Your monthly support is an investment in the projects that are currently being developed and the possibility of expanding our operation to support even more people around the world.",
    link: "",
    btnTxt: "Donate monthly",
    btnColor: "blue",
  },
  {
    title: "Annual Donation",
    list: [
      "Supplies delivered on time",
      "Operations expand to new locations",
      "New projects are developed",
    ],
    description:
      "More than a well-executed project, we want to see permanent benefits impacting where your donation reaches. Your monthly support is an investment in the projects that are currently being developed and the possibility of expanding our operation to support even more people around the world.",

    link: "",
    btnTxt: "Donate annualy",
    btnColor: "red",
  },
];

export default function DonationPlanComponent() {
  return (
    <section className="flex items-center my-5  md:my-16 flex-col">
      <DonationPlanIntro />
      <p className="mt-20 text-2xl lg:text-3xl text-blue-500 font-medium">
        Select a Donation plan
      </p>
      <div className="flex flex-col md:flex-row flex-wrap gap-14 lg:gap-7 mt-16 md:mt-20 mb-20 justify-center">
        {CardData.map((card) => (
          <DonationPlanCard
            key={card.title}
            title={card.title}
            description={card.description}
            list={card.list}
            link={card.link}
            btnTxt={card.btnTxt}
            btnColor={card.btnColor}
          />
        ))}
      </div>
    </section>
  );
}
