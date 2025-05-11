import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { useState } from "react";
import "./index.css";
import App from "./App.jsx";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <h1>Test</h1>
//       <StarRating color="violet" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" defaultRating={3} />
    <Test /> */}
  </StrictMode>
);
