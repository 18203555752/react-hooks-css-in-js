import React, { useState, useEffect } from "react";
export default function SetInterval() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval count', count); // increment by one per run
      setCount(count + 1);
    }, 1000);
    return () => {
      // each time count value changes (i.e per second, clear the interval and init one with new count value
      console.log('interval clear', count); 
      clearInterval(interval);
    }
  }, [count]);
  return <div> dep count is {count} </div>;
}

// import React, { useState, useEffect } from 'react';
// export default function SetInterval() {
//   const [ count, setCount ] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log("interval count", count); // count is always 0
//       setCount(count + 1);
//     }, 1000);
//     return () => {
//       clearInterval(interval)
//     }
//   }, []);
//   return <div> normal count is { count } </div>;
// }