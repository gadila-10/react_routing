import React {useRef} from "react";
const UseRefComponet=()=>{
const inputRef=useRef(null);
const handleClick=()=>{
    inputRef.current.focus();
    inputRef.current.style.backgroundColor='yellow';
}
return(
    <div>
        <h2>UseRef</h2>
        <input type="text" ref={inputRef} placeholder="click on to focus"/>
        <button onClick={handleClick}>Click to focus</button>
    </div>
)
}
export default UseRefComponet