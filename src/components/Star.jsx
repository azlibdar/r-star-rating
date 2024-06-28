/* eslint-disable react/prop-types */
import { StarIcon } from "@heroicons/react/24/solid";

function Star({ fillStar, onRate }) {
  return (
    <button
      onClick={onRate}
      className="w-12 h-12 flex justify-center items-center rounded-lg transition-all hover:scale-105 active:scale-95"
    >
      <StarIcon className={`size-11 ${fillStar ? "fill-b-yellow" : "fill-primary-500"}`} />
    </button>
  );
}

export default Star;
