import React, { Component } from "react";
import QuoteAndAuthor from "./components/QuoteAndAuthor";
//import quotes from "./QuoteDB";
import axios from "axios";
import "./coolText.css"; // Tell webpack that Button.js uses these styles

export default class App extends Component {
  //state
  state = {
    quote: "Det kommer inte på tentan",
    author: "Jakob Westergården",
  };

  //generate diffrent quote function
  generateRandomQuote = async (arr) => {
    //get random numbers

    const req = await axios.get(
      "https://raw.githubusercontent.com/VGDev1/Ursaktsgeneratorn/master/src/QuoteDB.json"
    );
    const quotes = await req.data;

    console.log(quotes);

    let num = Math.floor(Math.random() * quotes.length);

    let newQuote = quotes[num];

    //update state
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
    });

    this.shuffleQuotes(quotes);
  };

  //shuufle quotes function
  shuffleQuotes = (arr) => {
    return arr.sort(function () {
      return 0.5 - Math.random();
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center mainheader text-background-clip">
          B00leanBoisens ursäktsgenerator
        </h1>
        <div className="center-screen">
          <QuoteAndAuthor
            generateRandomQuote={this.generateRandomQuote}
            quote={this.state}
          />
        </div>
      </div>
    );
  }
}
