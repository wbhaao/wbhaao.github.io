import './App.css';
import imgLogo from './webtitle.png';
import { useState } from "react";
import imgUser1 from './김규민.png';
import imgUser2 from './김상윤.png';
import imgUser3 from './안예성.png';
import imgUser4 from './오창민.png';
import imgUser5 from './이재현.png';
import imgUser6 from './최성훈.png';

function Welcome(props) {
  return (
    <div className='background'>
      <div className='container'>
        <img className='title' src={imgLogo}></img>
        <form   className='startButton' onSubmit={event => {
            event.preventDefault()
            props.onStart()
          }}>
          <input type="submit" value="Start!"></input>
        </form>
        <div className='user'>
          <img className='userbunny1' src={imgUser1}></img>
          <input type='text'></input>
        </div>
        <div className='user'>
          <img className='userbunny2' src={imgUser6}></img>
          <input type='text'></input>
        </div>
        
      </div>
    </div>
  );
}
function Choose(props) {
  
}
// function App(props) {
//   return (
    
//   );
// }

function App() {
  const [mode, setMode] = useState("WELCOME");
  let content;
  if (mode === "WELCOME"){
    content = <Welcome onStart={() => {
      setMode('CHOOSE');
    }}/>;
    console.log("b")
  }
  else if (mode === "CHOOSE"){
    content = "hello wrold"
  }
  else if (mode === "FLIP"){
    
  }
  return (
    content
    
  );
}

export default App;
