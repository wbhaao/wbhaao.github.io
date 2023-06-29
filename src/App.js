import './App.css';
import imgLogo from './webtitle.png';
import { useState } from "react";
import imgUser1 from './김규민.png';
import imgUser2 from './김상윤.png';
import imgUser3 from './안예성.png';
import imgUser4 from './오창민.png';
import imgUser5 from './이재현.png';
import imgUser6 from './최성훈.png';
import scissor from './scissor.png';
import dollar from './dollar.png';
import location from './location.png';

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
  return (
    <div className='background'>
      <div className='container'>
        <img className='title' src={imgLogo}></img>
        <form className='chooseForm' onSubmit={event => {
            event.preventDefault()
            props.onGame(event.target.id)
          }}>
            <span className='box'>
              <input value=" " type="submit" id='one'/>
              <img id='oneone' src={scissor}/>
              <h1 id='o'>가위바위보</h1>
            </span>
            <span className='box'>
              <input value=" " type="submit" id='two'/>
              <img id='twotwo' src={dollar}/>
              <h1 id='t'>동전 던지기</h1>
            </span>
            <span className='box'>
              <input value=" " type="submit" id='three'/>
              <img id='threethree' src={location}/>
              <h1 id='th'>순발력 게임</h1>
            </span>
        </form>
      </div>
    </div>
  );
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
  }
  else if (mode === "CHOOSE"){
    content = <Choose onGame={(int) => {
      if (int==0){
        setMode('FLIP');
      }
      else if (int==1){
        setMode('FLIP');
      }
      else{
        setMode('FLIP');
      }
    }}/>;
  }
  else if (mode === "FLIP"){
    
  }
  return (
    content
    
  );
}

export default App;
