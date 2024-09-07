/* eslint-disable react/prop-types */
import { useState } from "react";
import "./index.css";

const QuoteGenerator = ({ quotes }) => {
  const [randomIndex, setRandomIndex] = useState(0);

  // function to generate a new random quote
  const generateQuote = () => {
    let newIndex = Math.floor(Math.random() * quotes.length);
    setRandomIndex(newIndex);
  };

  // list of background colors
  const backgroundColors = [
    "#FF6633", // orange
    "#FFB399", // light orange
    "#FF33FF", // pink
    "#FFFF99", // light yellow
    "#00B3E6", // blue
    "#E6B333", // brown
    "#3366E6", // dark blue
    "#999966", // dirty yellow
    "#B34D4D", // dark red
    "#809900", // olive
    "#E6B3B3", // light pink
    "#6680B3", // light blue
    "#CCFF1A", // green
    "#33FFCC", // light blue
    "#66994D", // dirty green
    "#B366bb",
  ];

  // Get the current background color based on the random index
  // Small logic for background color
  const currentBackgroundColor =
    backgroundColors[randomIndex % backgroundColors.length];

  return (
    <div
      className="quote-container"
      style={{
        backgroundColor: currentBackgroundColor,
      }}
    >
      <div className="quote-content">
        <h1 className="rainbow-text pacifico-regular">
          <a href="https://github.com/AVidhanR/QuoteGenerator" target="_blank">
            Quote Generator
          </a>
        </h1>
        <p>&ldquo;{quotes[randomIndex]}&rdquo;</p>
        <div>
          <button onClick={generateQuote}>New Quote</button>
        </div>
      </div>
      <footer>
        Made with ❤️ by{" "}
        <a href="https://linkedin.com/in/AVidhanR" target="_blank">
          A Vidhan Reddy
        </a>
      </footer>
    </div>
  );
};

export default QuoteGenerator;
// by AVidhanR
