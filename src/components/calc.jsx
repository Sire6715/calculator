import React from "react";
import "../index.css";
import { useState } from "react";
import * as math from "mathjs";


const Calc = (props) => {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");

  const handleClick = (e) => {
    setText(text.concat(e.target.name));
  };

  const reset = () => {
    setResult("");
    setText("");
  };

  const backSpace = () => {
    result === "NaN" ? setResult("") : setText(text.slice(0, text.length - 1));
    result === "NaN" ? setText("") : setText(text.slice(0, text.length - 1));
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(math.evaluate(text));
    } catch (err) {
      setResult("NaN");
    }
  };



  return (
    <section>
      <div className="w-full screen p-[4px] h-[5rem] shadow-lg mb-4 flex rounded-md text-2xl font-bold text-right justify-end">
        <span className="flex flex-col justify-end ">
          <h1 className={`${props.theme !== 'theme'  ? "cacl" : "text-white"  } text-xl cursor-pointer`}>
            {/\d/.test(text) ? result.toLocaleString("en-US") : result}
          </h1>
          <h1  className={`${props.theme !== 'theme'  ?  "cacl" : "text-white" } text-2xl cursor-pointer`}>{text}</h1>
        </span>
      </div>

      <div className="keys p-4 rounded-lg">
        <button
          name="7"
          onClick={handleClick}
          className="text-2xl buttons font-bold"
        >
          7
        </button>
        <button
          name="8"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          8
        </button>
        <button
          name="9"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          9
        </button>
        <button
          name=""
          onClick={backSpace}
          id="backspace"
          className="reset font-bold text-2xl"
        >
          {" "}
          del
        </button>
        <button
          name="4"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          4
        </button>
        <button
          name="5"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          5
        </button>
        <button
          name="8"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          6
        </button>
        <button
          name="+"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          +
        </button>
        <button
          name="1"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          1
        </button>
        <button
          name="2"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          2
        </button>
        <button
          name="3"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          3
        </button>
        <button
          name="-"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          &ndash;
        </button>
        <button
          name="."
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          .
        </button>
        <button
          name="0"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          0
        </button>
        <button
          name="/"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          &divide;
        </button>
        <button
          name="*"
          onClick={handleClick}
          className="text-2xl buttons font-bold "
        >
          x
        </button>
        <button
          name=""
          onClick={reset}
          id="reset"
          className="reset font-semibold text-2xl grid-span-two"
        >
          RESET
        </button>
        <button
          onClick={calculate}
          className="equal font-semibold text-2xl  grid-span-two"
        >
          =
        </button>
      </div>
    </section>
  );
};

export default Calc;
