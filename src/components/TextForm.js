import React,{useState} from 'react'

export default function TextForm(props) {

    const[text,setText] = useState("");
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const clear = () => {
        setText("");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied to clipboard","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

  return (
    <div className="container" style={{color: props.mode==='dark'?'#042743':'white'}}>
        <div>
        <h2 className='mb-4' style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
      </div>
      <div>
        <div className="mb-5">
          {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter text here</label> */}
          <textarea value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black' }} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>

          <button disabled={text.length===0} onClick = {handleUpClick} type="button" className="btn btn-primary my-3 mx-1">To Uppercase</button>
          <button disabled={text.length===0} onClick = {handleLowClick} type="button" className="btn btn-primary my-3 mx-1">To Lowercase</button>
          <button disabled={text.length===0} onClick = {handleCopy} type="button" className="btn btn-primary my-3 mx-1">Copy text</button>
          <button disabled={text.length===0} onClick = {handleExtraSpaces} type="button" className="btn btn-primary my-3 mx-1">Remove spaces</button>
          <button disabled={text.length===0} onClick = {clear} type="button" className="btn btn-primary my-3 mx-1">Clear</button>
            
           <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}} >
            <h3 >Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text :"Nothing to preview !!!!"}</p>
            </div> 

        </div>
      </div>
    </div>
  )
}
