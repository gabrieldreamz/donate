import { FaBookmark } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function CategoryCard() {
  return (
    <div className="flex items-center justify-between pt-3">
      <div className="flex items-center gap-2 ">
        <FaBookmark className="text-blue-500" />
        <p className="text-sm font-medium text-blue-500">Children</p>
      </div>
      <div className="flex items-center gap-2 ">
        <FaLocationDot className="text-yellow-500" />
        <p className="text-sm font-medium text-yellow-500 ">Lagos</p>
      </div>
    </div>
  );
}
