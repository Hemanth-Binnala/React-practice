import React, { useRef } from 'react';

const ClickCounter = () => {
  const counter = useRef(0);

  const clickHandler = () => {
    counter.current+=1;
    console.log(counter.current)
  }

  return (
    <div>
      <p>Check the console after clicking the button</p>
      <button onClick={clickHandler}>
        Click me
      </button>
    </div>
  );
};

export default ClickCounter;

// import React, { useRef } from 'react';

// const ClickCounter = () => {
//   const countRef = useRef(0); // Initialize count to 0

//   const handleClick = () => {
//     countRef.current += 1;
//     console.log(countRef.current);
//   };

//   return (
//     <div>
//       <p>Check the console after clicking the button</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

// export default ClickCounter;
