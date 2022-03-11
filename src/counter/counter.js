import React, { useEffect, useState } from "react";

const Counter = () =>{
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      console.log("starting web worker");
      const worker = new Worker("/worker.js");
      worker.addEventListener("message", ({ data }) => {
        setCounter(data);
      });
      return () => {
        console.log("terminating web worker");
        worker.terminate();
      };
    }, []);
    return (
      <div className="counter">
        <h1>Web Worker in React Functional Component</h1>
        <h2>{counter}</h2>        
      </div>
    );
  }
  
export default Counter;