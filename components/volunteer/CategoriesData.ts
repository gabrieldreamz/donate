import engineer from "@public/assets/icons/engineer.png";
import medical from "@public/assets/icons/medical.png";
import book from "@public/assets/icons/book.png";
import social from "@public/assets/icons/social.png";
import { StaticImageData } from "next/image";

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

export default CategoriesData;
