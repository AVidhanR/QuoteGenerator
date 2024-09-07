import QuoteGenerator from "./quote-generator";
import quoteData from "./data/quotes.json";
import "./index.css";

function App() {
  return (
    <div
      style={{
        fontFamily: `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif`,
      }}
    >
      <QuoteGenerator quotes={quoteData.listOfQuotes} />
    </div>
  );
}

export default App;
