import React, { useEffect, useState } from 'react';
import { KeyboardBarcodeScanner } from '@point-of-sale/keyboard-barcode-scanner';

const App = () => {
  const [barcode, setBarcode] = useState('');

  useEffect(() => {
    const scanner = new KeyboardBarcodeScanner({
      onScan: (code) => {
        console.log('Scanned code:', code);
        setBarcode(code);
      },
      onError: (error) => {
        console.error('Scan error:', error);
      },
    });

    return () => {
      scanner.stop();
    };
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Barcode Scanner</h2>
      <p><strong>Scanned Code:</strong> {barcode}</p>
    </div>
  );
};

export default App;















// import React from 'react'

// function App() {
//   console.log("app component called ");
//   // let count = 100;
//   let [count,setCount ] = React.useState(100)
//   function increment(){
//     // count++;
//     setCount(count + 1)
//     console.log("count  === ::",count)
//   }
//   function decrement(){
//     // count--;
//     setCount(count - 1)
//     console.log("count  === ::",count)
//   }
//   function double(){
//     // count--;
//     setCount(count * 2);
//     console.log("count  === ::",count)
//   }

//   /**
//    * DATA SYNC WITH UI
//    */

//   return (
//     <div>
//       <h1>count == {count}</h1>
//       <button onClick={increment}  >INCREMENT</button>
//       <button onClick={decrement} >DECREMENT</button>
//       <button onClick={double} >make double</button>

//     </div>
//   )
// }



// export default App