import React, { useState } from "react";
import "./App.css";
import './index.css';
import FizzBuzz from "./composents/FizzBuzz"
//import { fizzbuzz } from "./components/fizzBuzz";
//import Reset from "./components/Reset";
//import Next from "./components/Next";

function App() {
  
  return (
    <div className="App" className="container">
      <header className=".jumbotron.col-sm-8.col-sm-offset-2">
        <h1>React Fizz Buzz</h1>
        <p>
           Counting incrementally, any number divisable by 3 is replaced by the word "fizz", and any number divisible by five with the word "buzz".
        </p>
        <FizzBuzz/>
      </header>
    </div>
  );
}

export default App;

