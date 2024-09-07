import QuoteGenerator from "./quote-generator";
import quotes from "./data/quotes.json";
import "./index.css";

function App() {
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <QuoteGenerator quotes={quotes.listOfQuotes} />
    </div>
  );
}

export default App;
