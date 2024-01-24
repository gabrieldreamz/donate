import CenterCard from "@shared/CenterCard";

import { StaticImageData } from "next/image";

import engineer from "@public/assets/icons/engineer.png";
import medical from "@public/assets/icons/medical.png";
import book from "@public/assets/icons/book.png";
import social from "@public/assets/icons/social.png";
import CategoriesCard from "@components/home/categories/CategoriesCard";
import VolunteerForm from "./VolunteerForm";
import HeroComponent from "./HeroComponent";

export default function VolunteerComponent() {
  const CategoriesData: {
    image: StaticImageData;
    title: string;
    description: string;
    color: string;
  }[] = [
    {
      image: book,
      title: "Teachers and Translators",
      description: "Join our team of educators and language enthusiasts",
      color: "green",
    },
    {
      image: medical,
      title: "Doctors and Nurses",
      description: "Join our team of healthcare professionals",
      color: "red",
    },
    {
      image: engineer,
      title: "Engineers and Architects",
      description: "Join our dynamic team of problem solvers and visionaries",
      color: "blue",
    },
    {
      image: social,
      title: "Social Workers and Economists",
      description: "Join our team of social workers and insightful economists",
      color: "purple",
    },
  ];

  return (
    <CenterCard>
      <section className="flex flex-col gap-3 mb-12 mt-7 md:mt-16">
        <h1 className="text-4xl sm:text-5xl text-center 2xl:text-7xl text-dark mt-7 sm:mt-12">
          Join Our Community.
        </h1>
        <p className="text-center mx-auto my-5 sm:my-9 rounded-3xl bg-blue-200 font-medium text-dark/80 py-[10px] px-5">
          Together we can bring hope to the world
        </p>
        <p className="text-dark text-center max-w-5xl mx-auto px-5 lg:px-2">
          Are you passionate about giving back to the community and making a
          positive impact? Look no further! Our volunteer program is calling on
          dedicated individuals who share a common goal – to create positive
          change and uplift those in need.
        </p>

        <div className="flex items-center justify-center gap-5 sm:gap-7 mt-16 sm:mt-20 flex-wrap lg:flex-nowrap px-5">
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

        <HeroComponent />

        <div className="mt-16 sm:mt-20 flex flex-col gap-5">
          <p className="text-blue-500 font-medium text-center">
            BECOME A VOLUNTEER
          </p>
          <h1 className="text-3xl sm:text-5xl text-center mx-auto text-dark max-w-2xl">
            Join us and help bring Hope to the World.
          </h1>
        </div>
        <VolunteerForm />
      </section>
    </CenterCard>
  );
}
