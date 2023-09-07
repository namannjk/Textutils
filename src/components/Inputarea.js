import React, {useState} from 'react'

export default function (props) {
   const  [Text,setText] = useState("Enter the Text")
   const handleOnUp = ()=>{
    // console.log("Hy i am button"+Text)
    setText(Text.toUpperCase())
    props.showAlert("Converted to uppercase", "success");
   }
   const handleOnLow = ()=>{
    // console.log("Hy i am button"+Text)
    setText(Text.toLowerCase())
    props.showAlert("Converted to LowerCase", "success");
   }
   const removeExtraSpace = ()=>{
     let newText = Text.split(/[ ]+/)
     setText(newText.join(' '))
     props.showAlert("Extra Space removed Successfully", "success");

   }
   const capitalizeLetter= ()=> {
    const words = Text.split(' ');

  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

    setText(capitalizedWords.join(' '));
}
   const handleOnChange = (event)=>{
    // console.log("Hy")
    setText(event.target.value)
   }
   const findWords = (Text)=>{
       let arr = Text.split(' ');
       let n = arr.length;
       while(arr[n-1]=='')n-=1;
       return n;
   }
  return (
    <div>
<div className="mb-3">
  <h3 style = {{color : (props.mode=='dark')?'white':'black', marginTop: '10px'}}>{props.Title}</h3>
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" style = {{backgroundColor : (props.mode=='dark')?'grey':'white' , color : (props.mode=='dark')?'white':'black'}} value = {Text} onChange = {handleOnChange} rows="3"></textarea>
</div>
<button type="button" className="btn btn-primary mx-2" onClick={handleOnUp}>Convert To Upper</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleOnLow}>Convert To lower</button>
<button type="button" className="btn btn-primary mx-2" onClick={capitalizeLetter}>Convert First leter</button>
<button type="button" className="btn btn-primary" onClick={removeExtraSpace}>Remove Extra Space</button>
    <div className="container" style = {{ color : (props.mode=='dark')?'white':'black'}} >
        <h3>Summary</h3>
        <p>{findWords(Text)} words and {Text.length} charcters</p>
        <h3>Preview</h3>
        {Text}
        <br />
        {0.008*Text.split(' ').length}
    </div>
    </div>

  )
}
