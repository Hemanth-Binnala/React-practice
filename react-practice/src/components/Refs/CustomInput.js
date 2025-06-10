// // CustomInput.js
// import React, { forwardRef, useRef, useImperativeHandle } from 'react';

// const CustomInput = forwardRef((props, ref) => {
//   const outputRef = useRef();

//     useImperativeHandle (ref,() => ({
//         focus : () =>{
//             outputRef.current.focus()
//         },
//         clear : () => {
//             outputRef.current.value = " ";
//             outputRef.current.focus()
//         }
//     }))

//   return <input ref={outputRef} placeholder="Type something" />;
// });

// export default CustomInput;

import React, {forwardRef, useImperativeHandle, useRef} from 'react'

const CustomInput = forwardRef((props, ref) => {
    const outputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus : () => {
            outputRef.current.focus()
        },
        clear : () => {
            outputRef.current.value = ''
        }
    }))
    

 return <input ref={outputRef} placeholder="Type something" />;
})

export default CustomInput

