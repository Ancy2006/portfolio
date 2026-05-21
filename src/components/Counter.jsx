import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);


  function Increment() {
    setCount(count +  Number(value));
  }

  function Decrement() {
    if (count > 0) {
      setCount(count - Number(value));
  }
  }
  function Reset() {
    setCount(0);
  }
  useEffect(()=>{
    console.log('count changed to',count)
  },[count]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center w-80 border border-white/30">
        
        <h1 className="text-6xl font-bold text-white mb-8 drop-shadow-lg">
          {count}
        </h1>

        <div className="flex flex-col gap-4">
          <input type="number" value={value} onChange={(x) => setValue(x.target.validationMessagelue)}></input>
          <button
            onClick={Increment}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl transition transform hover:scale-105"
          >
            Increment +
          </button>

          <button
            onClick={Decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl transition transform hover:scale-105"
          >
            Decrement -
          </button>

          <button
            onClick={Reset}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl transition transform hover:scale-105"
          >
            Reset ↻
          </button>
          <p>Limit 0 to 20</p>

        </div>
      </div>
    </div>
  );
}

export default Counter;