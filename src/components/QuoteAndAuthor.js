import axios from "axios";
import React, { useEffect, useState } from "react";
import "./../coolButton.css"; // Tell webpack that Button.js uses these styles
import "./../coolText.css"; // Tell webpack that Button.js uses these styles

export default function QuoteAndAuthor(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const x = async () => {
      const result = await axios.get(
        "https://raw.githubusercontent.com/VGDev1/Ursaktsgeneratorn/master/src/QuoteDB.json"
      );
      setData(result.data);
    };
    x();
  }, []);

  const { quote, generateRandomQuote } = props;
  return (
    <div className="bottom-margin">
      <h2 style={{ textAlign: "center" }} className="text-background-clip">
        {quote.quote}
      </h2>
      <h4 style={{ textAlign: "center" }} className="text-background-clip">
        - {quote.author}
      </h4>
      <div className="center">
        <button
          class="button-64"
          role="button"
          onClick={() => {
            generateRandomQuote(data);
          }}
        >
          <span class="text">Generera ursäkt</span>
        </button>
      </div>
    </div>
  );
}
