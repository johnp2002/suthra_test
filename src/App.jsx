import React from 'react'

function App() {
  console.log("app component called ");
  // let count = 100;
  let [count,setCount ] = React.useState(100)
  function increment(){
    // count++;
    setCount(count + 1)
    console.log("count  === ::",count)
  }
  function decrement(){
    // count--;
    setCount(count - 1)
    console.log("count  === ::",count)
  }
  function double(){
    // count--;
    setCount(count * 2);
    console.log("count  === ::",count)
  }

  /**
   * DATA SYNC WITH UI
   */

  return (
    <div>
      <h1>count == {count}</h1>
      <button onClick={increment}  >INCREMENT</button>
      <button onClick={decrement} >DECREMENT</button>
      <button onClick={double} >make double</button>

    </div>
  )
}



export default App