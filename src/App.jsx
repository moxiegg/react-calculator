import {useState} from 'react';
import Screen from './Screen';
import Button from './Button';
import './App.css'
const App = () => {
  const [input,setInput] = useState("");
  const arr = ["C","%","<=","/","7","8","9","*","4","5","6","-","1","2","3","+","00","0",".","="];
  const handleClick = (e) => {
    var inp = e.target.textContent;
    if(inp==="C")setInput("");
    else if(inp=="<=")setInput(input.substring(0,input.length-1));
    else setInput(input+e.target.textContent);
  }
  return(
    <div className="calculator-container">
    <Screen input={input}/>
    <Button keys={arr} handleClick={handleClick}/>
    </div>
  )
}
export default App;