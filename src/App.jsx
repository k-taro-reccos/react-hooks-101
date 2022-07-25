import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const increment2 = () => setCount(previousCount => previousCount + 1)

  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const resetButton = () => setCount(0);
  
  const multiplyButton = () => setCount(count * 2)

  const divisionButton = () => {
    setCount(prevState => prevState % 3 === 0 ? prevState / 3 : prevState)
  }

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={resetButton}>Reset</button>
        <button onClick={multiplyButton}>×2</button>
        <button onClick={divisionButton}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
