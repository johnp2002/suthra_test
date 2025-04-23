import React, { useEffect, useState } from 'react';

const App = () => {
  const [barcodes, setBarcodes] = useState([]);
  const [buffer, setBuffer] = useState('');

  useEffect(() => {
    let timer;

    const handleKeyDown = (e) => {
      clearTimeout(timer);

      // End of barcode (usually Enter)
      if (e.key === 'Enter') {
        if (buffer.length > 0) {
          setBarcodes((prev) => [...prev, buffer]);
          setBuffer('');
        }
      } else {
        setBuffer((prev) => prev + e.key);
      }

      // Clear buffer if no key is pressed in 100ms
      timer = setTimeout(() => setBuffer(''), 100);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [buffer]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Scanned Barcodes</h2>
      <ul>
        {barcodes.map((code, index) => (
          <li key={index}>{code}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;





// import React, { useEffect, useState } from 'react';
// import KeyboardBarcodeScanner from '@point-of-sale/keyboard-barcode-scanner';

// const App = () => {
//   const [barcodes, setBarcodes] = useState([]);

//   useEffect(() => {
//     const scanner = new KeyboardBarcodeScanner({
//       onScan: (code) => {
//         console.log('Scanned:', code);
//         setBarcodes((prev) => [...prev, code]); // Append new code
//       },
//       onError: (err) => {
//         console.error('Scanner error:', err);
//       },
//     });

//     return () => {
//       scanner?.stop?.();
//     };
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Scanned Barcodes</h2>
//       <ul>
//         {barcodes.map((code, index) => (
//           <li key={index}>{code}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;















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



// export default 
// App