import React,{useState,useEffect,useMemo} from 'react'

const debounce = (func,delay) => {
    let timer
    return(...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {func(...args)},delay)
    }
}

const Names = ['sai','sasss','swap','bye','cow','dog','bog','jog','rog','tap','for']

function AutoCompleteWithDebounce() {
    const[inputName,setInputName] = useState('')
    const[suggested,setSuggested] = useState([])
    const lognames = (text) => {
        if(!text){
            setSuggested([]);
            return;
        }
        const filtered = Names.filter((name) => name.toLowerCase().startsWith(text.toLowerCase()));
        console.log(`fetching suggestions for ${text}`)
        setSuggested(filtered)
    }
    const debouncedAutocomplete = useMemo(() => debounce(lognames,500),[])
    useEffect(()=>{
        debouncedAutocomplete(inputName)
    },[inputName,debouncedAutocomplete])
  return (
    <div>
      <input type='text' onChange={(e) => setInputName(e.target.value)}/>
      {
        suggested.length > 0 && inputName && (
            <ul>{suggested.map((name,index) => <li key={index}>
                {name}
            </li> )
                }</ul>
        )
      }
    </div>
  )
}

export default AutoCompleteWithDebounce

// import React, { useState, useEffect, useMemo } from 'react';

// const debounce = (func, delay) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => func(...args), delay);
//   };
// };

// const Names = ['sai', 'bye', 'cow', 'dog', 'bog', 'jog', 'rog', 'tap', 'for'];

// function AutoCompleteWithDebounce() {
//   const [inputName, setInputName] = useState('');
//   const [suggested, setSuggested] = useState([]);

//   const lognames = (text) => {
//     if (!text) {
//       setSuggested([]);
//       return;
//     }
//     const filtered = Names.filter((name) =>
//       name.toLowerCase().startsWith(text.trim().toLowerCase())
//     );
//     console.log(`Fetching suggestions for: ${text}`);
//     setSuggested(filtered);
//   };

//   const debouncedAutocomplete = useMemo(() => debounce(lognames, 500), []);

//   useEffect(() => {
//     debouncedAutocomplete(inputName);
//   }, [inputName, debouncedAutocomplete]);

//   return (
//     <div style={{ padding: '20px', maxWidth: '300px' }}>
//       <input
//         type="text"
//         placeholder="Start typing a name..."
//         onChange={(e) => setInputName(e.target.value)}
//         style={{ width: '100%', padding: '8px' }}
//       />
//       {suggested.length > 0 && inputName && (
//         <ul style={{ padding: '0', marginTop: '10px', listStyle: 'none', border: '1px solid #ccc' }}>
//           {suggested.map((name, index) => (
//             <li key={index} style={{ padding: '6px 10px', borderBottom: '1px solid #eee' }}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default AutoCompleteWithDebounce;
