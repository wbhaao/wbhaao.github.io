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
import folder from './folder.png';
import flipVideo1 from "./0001-0224.mp4";
import flipVideo2 from "./0001-0225.mp4";

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

function Card(props) {
  return (
    <form id={props.idnum} className='card-box' onSubmit={event => {
      event.preventDefault()
      props.onGamefunc(event.target.id)
      console.log(event.target.id)
    }}>
      <div className='text-wrap'>
        <h1>{props.title}</h1>
        {/* <p>순발력이 중요함</p> */}
      </div>
      <input value="" type="submit"/>
      <div className='imgCover'>
        <img src={props.imgLink}/>
      </div>
  </form>
  );
}
function Choose(props) {
  return (
    <div className='background'>
      <div className='container alignContainer'>
        <img className='title' src={imgLogo}></img>
        <Card idnum='0' onGamefunc={props.onGame} imgLink={scissor} title={"가위바위보"}/>
        <Card idnum='1' onGamefunc={props.onGame} imgLink={dollar} title={"동전뒤집기"}/>
        <Card idnum='2' onGamefunc={props.onGame} imgLink={location} title={"순발력게임"}/>
        <Card idnum='3' onGamefunc={props.onGame} imgLink={folder} title={"대전기록지"}/>
      </div>
    </div>
  );
}
function Flip(props) {

  if (Math.floor(Math.random() * 2)){
    return (
      <video onClick={()=>{
        console.log("hello world")
      }} autoPlay muted>
        <source src={flipVideo1} type="video/mp4"/>
      </video>
    );
  } else {
    return (
      <video onClick={()=>{
        console.log("hello world")
      }} autoPlay muted>
        <source src={flipVideo2} type="video/mp4"/>
      </video>
    );
  }
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
        setMode('PAPER');
      }
      else if (int==1){
        setMode('FLIP');
      }
      else if (int==2){
        setMode('FAST');
      }
      else{
        setMode('RECORD');
      }
    }}/>;
  }
  else if (mode === "FLIP"){
    content = <Flip videoFile=""/>;
  }
  else if (mode === "PAPER"){
    content = "hello PAPER";
  }
  else if (mode === "FAST"){
    content = "hello FAST";
  }
  else if (mode === "RECORD"){
    content = "hello RECORD";
  }
  return (
    content
  );
}

export default App;
