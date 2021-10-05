import React from "react";
import quotes from "../QuoteDB";
import "./../coolButton.css"; // Tell webpack that Button.js uses these styles

export default function QuoteAndAuthor(props) {
  const { quote, generateRandomQuote } = props;
  return (
    <div className="bottom-margin">
      <h2 style={{ textAlign: "center" }} className="card-text">
        {quote.quote}
      </h2>
      <h4 style={{ textAlign: "center" }} className="card-title">
        - {quote.author}
      </h4>
      <div className="center">
        <button
          class="button-64"
          role="button"
          onClick={() => {
            generateRandomQuote(quotes);
          }}
        >
          <span class="text">Generera ursäkt</span>
        </button>
      </div>
    </div>
  );
}
