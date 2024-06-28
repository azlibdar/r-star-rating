/* eslint-disable react/prop-types */
import Star from "./Star";

function StarRating({ rating, setRating }) {
  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="w-min max-w-[444px] p-6 bg-primary-800 rounded-xl flex justify-center items-center">
      {[...Array(5)].map((_, i) => (
        <Star key={i} fillStar={rating >= i + 1} onRate={() => handleRating(i + 1)} />
      ))}
    </div>
  );
}

export default StarRating;
