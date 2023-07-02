import './App.css';
import imgLogo from './webtitle.png';
import React, { useRef, useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';
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
  // const [user1Img, setUser1Img] = useEffect(imgUser1)
  // const [user2Img, setUser2Img] = useEffect(imgUser2)
  // const [name1, setName1] = useEffect(document.getElementById('userInput1'))
  // const [name2, setName2] = useEffect(document.getElementById('userInput2'))
  // setName1(document.getElementById('userInput1'))
  // setName2(document.getElementById('userInput2'))
  // if (true){
  //   switch (1) {
  //     case 0:
  //       setUser1Img(imgUser1)
  //       break;
  //     case 1:
  //       setUser1Img(imgUser2)
  //       break;
  //     case 2:
  //       setUser1Img(imgUser3)
  //       break;
  //     case 3:
  //       setUser1Img(imgUser4)
  //       break;
  //     case 4:
  //       setUser1Img(imgUser5)
  //       break;
  //     case 5:
  //       setUser1Img(imgUser6)
  //       break;
  //     default:
  //       break;
  //   } 
  // }
  // if (charactorList.includes(name1)){
  //   charactorList.indexOf(name1)
  // }
  return (
    <div className='background'>
      <div className='container'>
        <img className='title' src={imgLogo}></img>
        <form className='startButton' onSubmit={event => {
            event.preventDefault()
            props.onStart()
          }}>
          <input type="submit" value="Start!"></input>
        </form>
        <div className='user'>
          <img className='userbunny1' src={imgUser1}></img>
          <input id='userInput1' placeholder='캐릭터 선택' type='text'></input>
        </div>
        <div className='user'>
          <img className='userbunny2' src={imgUser1}></img>
          <input id='userInput2' placeholder='캐릭터 선택' type='text'></input>
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
function Circle(props) {
  if (props.visible){
    return (
      <div onClick={()=>props.onclick()} style={{visibility:'visible'}} className='circleBTN'>
        <h1>눌러</h1>
      </div>
    );
  }else{
    return (
      <div onClick={()=>props.onclick()} style={{visibility:'hidden'}} className='circleBTN'>
        <h1>눌러</h1>
      </div>
    );
  }
  
}
function Speed(props) {
  // 첫번째 사람이 클릭하고 다음 사람이 클릭해서 기록 비교
  const [count, setCount] = useState(0.00);
  const [userA, setUserA] = useState();
  const [userB, setUserB] = useState();
  const [decrease, setDecrease] = useState(0.05)
  const [nextTurn, setNextTurn] = useState("시작하기");


  useEffect(() => {
    const id = setInterval(() => {
      setCount(count => (count - decrease).toFixed(2)); 
    }, 50);
    if(Math.ceil(count) === 0){
      clearInterval(id);
    }
    return (()=>
      clearInterval(Math.ceil(id)));
  }, [count]);
  const [visibleIndex, setVisibleIndex] = useState(-1)
  return (
    <div className='background'>
      <div className='container'>
        <div className='alignContainer'>
          <h1 className='timer'>{(6-count).toFixed(2)}</h1>
          <Circle onclick={()=>{
            setDecrease(0)
            setNextTurn("다시시작")
          }} visible={visibleIndex==0?true:false} />
          <Circle visible={false} />
          <Circle onclick={()=>{
            setDecrease(0)
            setNextTurn("다시시작")
          }}e visible={visibleIndex==1?true:false} />
          {/*다음차례*/}
          <h1 onClick={()=>{
            setCount(6)
            setDecrease(0.05)
            setNextTurn("")
            setVisibleIndex(Math.floor(Math.random() * 2))
          }} className='strtButton'>{nextTurn}</h1>
        </div>
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
    content = <Speed/>
  }
  else if (mode === "RECORD"){
    content = "hello RECORD";
  }
  return (
    content
  );
}

export default App;
