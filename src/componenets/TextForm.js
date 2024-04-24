import React, {useState} from "react";


export default function TextForm(props) {
    
    //Uppercase value
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    //Lowecase value
    const handleLoClick = ()=>{
        // console.log("Lowecase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    //Clear value
    const handleClearClick = ()=>{
        // console.log("Clear was clicked" + text);
        let newText = '';
        setText(newText)
    }
    //Change the value
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    //Copy the value
    const handleCopy = ()=>{
        //console.log("I am copy"); //when we have return the value in console for the copy
        var text = document.getElementById("myBox");
        text.select();
        //text.setSelectionRange(0, 9999); //for define range of copy word
        navigator.clipboard.writeText(text.value);
    }
    //Remove Extra Space in the value
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');
    //text = 'new text'; // wrong way to change the state
    //setText("new text"); // correct way to change the state
    return (
        <>
        <div className="container">
                <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>


        </div>
        <div className="container my-3">
            <h1>Your text summery</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split("").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
  )
}
