/* eslint-disable react/prop-types */
import { useState } from "react";
import StarRating from "./components/StarRating";

function App() {
  const [rating, setRating] = useState(0);
  const text = rating === 0 ? "🙈🙈🙈" : rating <= 2 ? "💩💩💩" : rating <= 4 ? "🙉🙉🙉" : "🙊🙊🙊";
  return (
    <div className="app-center">
      <h1 className="w-full max-w-[444px] text-6xl lg:text-8xl text-center mb-8">{text}</h1>
      <StarRating rating={rating} setRating={setRating} />
    </div>
  );
}

export default App;
