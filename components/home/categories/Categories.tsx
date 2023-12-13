import CenterCard from "@shared/CenterCard";
import CategoriesCard from "./CategoriesCard";

import food from "@public/assets/icons/food.png";
import medical from "@public/assets/icons/medical.png";
import education from "@public/assets/icons/education.png";
import water from "@public/assets/icons/water.png";
import { StaticImageData } from "next/image";

const CategoriesData: {
  image: StaticImageData;
  title: string;
  description: string;
  color: string;
}[] = [
  {
    image: food,
    title: "Healthy Food",
    description:
      "The assistance provided is healthy food used for cooking and eating",
    color: "green",
  },
  {
    image: medical,
    title: "Medical Help",
    description:
      "The assistance provided is medical facilities for various diseases",
    color: "red",
  },
  {
    image: water,
    title: "Clean Water",
    description:
      "The assistance provided is clean water for drinking, cooking and bathing",
    color: "blue",
  },
  {
    image: education,
    title: "Education",
    description:
      "The assistance provided is tution fees and school development",
    color: "purple",
  },
];

export default function Categories() {
  return (
    <CenterCard>
      <section className="lg:mb-32 lg:mt-16">
        <div className="mx-auto text-center text-3xl lg:text-4xl max-w-xs sm:max-w-full text-dark">
          <h1>Support the less poor by Donating today</h1>
        </div>
        <div className="flex items-center justify-center gap-5 sm:gap-7 mt-20 flex-wrap lg:flex-nowrap px-5">
          {CategoriesData.map((cat) => (
            <CategoriesCard
              key={cat.title}
              image={cat.image}
              title={cat.title}
              description={cat.description}
              color={cat.color}
            />
          ))}
        </div>
      </section>
    </CenterCard>
  );
}
