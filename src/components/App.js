import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [counter, setCounter] = useState(1);
  const [tempClass, setTempClass] = useState('');

  function incrementFn() {
    setCount(counter => counter + 1);
  }

  function decrementFn() {
    setCount(counter => counter - 1);
  }

  useEffect(() => {
    if (counter % 5 == 0 && counter % 3 == 0) {
      setTempClass('fizzbuzz')
    } else if (counter % 3 == 0) {
      setTempClass('fizz')
    } else if (counter % 5 == 0){
      setTempClass('buzz') 
    } else {
      setTempClass('normal')
    }
  }, [count])

  
  return (
    <div id="main">
    <button onClick={incrementFn}>Increment</button>
    <div className={tempClass}>{counter}</div>
    <button onClick={decrementFn}>Decrement</button>

    </div>
  )
}


export default App;
