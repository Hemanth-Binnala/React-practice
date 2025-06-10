// import React, { Component } from 'react'
// import Purecomp from './components/pureComponents/purecomp'
// import Regcomp from './components/pureComponents/Regcomp'
// import ParentComp from './components/pureComponents/parentComp'

//  class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Purecomp />
//         <Regcomp /> */}
//         <ParentComp />
//       </div>
//     )
//   }
// }

// export default App

///////////////////The above example is for pureComponent ///////////////////////////////////////////


// import React from 'react'
// import mycontext from './components/ContextAPI/createCustom'
// import Profile from './components/ContextAPI/Profile'

// const App = () => {
//   const user = {
//     name : 'dudu',
//     hobby : 'irritating bubu',
//     friend : 'bubu'
//   }
//   return (
//     <mycontext.Provider value = {user}>
//     <div>
//       <Profile />
//     </div>
//     </mycontext.Provider>

//   )
// }

// export default App

//////////////////////////The above one is for context API/////////////////////////////////////////////

// import React from 'react'
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
// import ErrorComponent from './components/ErrorBoundary/ErrorComponent'
// import ErrorComponent2 from './components/ErrorBoundary/errorComponent2'

///////wrap each component in errorBundary so that if there is error in one component it doesn't effect the another component
//////for example ErrorComponent & ErrorComponent2 are individually wrapped in diff errorboundary if both are wrapped in single error boundary
///// then if there is error in errorComponent and no error error in errorComponent2 it discards the whole UI and gives the fallback UI even if there is no error in errorComponent

// const App = () => {
//   return (
//     <div>
//       <h1>Error</h1>
//       <ErrorBoundary>
//       <ErrorComponent />
//     </ErrorBoundary>
//     <ErrorBoundary>
//       <ErrorComponent2 />
//     </ErrorBoundary>
    
//     </div>

//   )
// }

// export default App

///////////////////////////////////the above is for Error Boundary ///////////////////////////////////////////////////////

// import React from 'react'
// import ClassBasedRefs from './components/Refs/ClassBasedRefs'
// import ClassBasedRefwithMethod from './components/Refs/ClassBasedRefwithMethod'
// import FocusInput from './components/Refs/RefwithComponents/FocusInput'
// import FRParent from './components/Refs/RefForwarding/FRParent'
// import ClickCounter from './components/Refs/codeSol1'

// const App = () => {
//   return (
//     <div>
//      {/* <ClassBasedRefs />   on the  load of page the input area is focused */}
//      {/* <ClassBasedRefwithMethod />   focused when clicked on button */}
//      {/* <FocusInput /> used with class component refs ie., one method defined can be used in other place with refs */}
//      {/* <FRParent />  this is for forwarding refs */}
//      <ClickCounter />
//     </div>
//   )
// }


// export default App

// App.js
// import React, { useRef } from 'react';
// import CustomInput from './components/Refs/CustomInput';
// const App = () => {
//   const inputRef = useRef();

//   return (
//     <div>
//       <CustomInput ref={inputRef} />
//       <button onClick={() => inputRef.current.focus()}>Focus</button>
//       <button onClick={() => inputRef.current.clear()}>Clear</button>
//     </div>
//   );
// };

// export default App;

//////////////////the above is for REFS practice///////////////////////////////////////////
//  import React from 'react'
// import PortalExample from './components/portals/portalExample'
 
//  function App() {
//    return (
//      <div>
//        <PortalExample />
//      </div>
//    )
//  }
 
//  export default App
 
////////////////////above is PORTALS ///////////////////////////////////

// import React from 'react'
// import ClickCounter from './components/Hocs/ClickCounter'
// import HoverMouse from './components/Hocs/HoverMouse'
// import ClickCounterHoc from './components/Hocs/ClickCounterHoc'
// import HoverMouseHoc from './components/Hocs/HoverMouseHoc'

// const App = () => {
//   return (
//     <div>
//       <ClickCounter />
//       <HoverMouse />
//       <ClickCounterHoc name = 'Hemanth'  />
//       <HoverMouseHoc />
//     </div>
//   )
// }

// export default App

//////////////////////////Above is HOCS /////////////////////////////////////////////////

import React, { Component } from 'react'
import CounterClickertwo from './components/ReactRender/CounterClickertwo'
import HoverCounterTwo from './components/ReactRender/HoverCounterTwo'
import User from './components/ReactRender/user'
import Counter from './components/ReactRender/Counter'
import CounterClickertwoRender from './components/ReactRender/CounterClickerTwoRender'

class App extends Component {
  render() {
    return (
      <div>
        <CounterClickertwo />
        <HoverCounterTwo />
        {/* <User name = 'sai' /> */}
        {/* <User name ={() => 'sai'} /> */}
         <User render ={(isloggedin) => isloggedin ? 'sai' : 'Guest'} />
        <Counter render = {(count,clicked)=>(<CounterClickertwoRender count={count} clicked = {clicked} />)} />
      </div>
    )
  }
}

export default App

///////////////////////The above is for practising REACT-RENDER///////////////////////////////////////////

