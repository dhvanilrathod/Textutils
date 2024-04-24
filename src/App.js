import "./App.css";
// import About from "./componenets/About";
import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";
import React, { useState } from 'react'


function App() {
  const [mode, setMode]= useState('light'); //whether dark mode is enable or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    }
    else {
      setMode('light');
    }
    
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} /> {/*if we use this manual props(proptypes) work [Navbar.js]*/}
      {/* <Navbar  /> if we only use this so the default props works [Navbar.js]*/} 
      <div className="container my-3">
        <TextForm heading="Enter the text to analze below" />
        {/* <About /> */}
      </div>

      

      
      

    </>
  );
}

export default App;
