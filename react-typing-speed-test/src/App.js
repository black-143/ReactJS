import logo from './logo.svg';
import './App.css';
import { Children, useEffect, useRef, useState,React } from 'react';

const getCloud = () => `codedamn menul playground react nextjs windows elon musk bitcoin dogecoin cryptocurrency
editor coding html js world earth mars kjkjhk uktytyu hgf tf heart wood blanket`.
split(' ')
function Word(props){

  const {text,active,correct}=props

  const rerender = useRef(0)
  useEffect(()=>{
    rerender.current+=1
  })

  if(correct===true){
    return <span className='correct'>{text}</span>
  }
  if(correct===false){
    return <span className='incorrect'>{text}</span>
  }
  if(active){
    return <span className='active'>{text}</span>
  }
 return <span>{text}</span>
  return <span style={{
    fontWeight:active ?'bold':'normal'
  }}>{text}</span>
}

//Word = React.memo(Word)
//check whether func re-render or not

function Timer(props){

  const {correctWords,startCouting}=props

  const [timeElapsed,setTimeElapsed]=useState(0)
  
  useEffect(()=>{ 
    let id;

    if(startCouting){
      setInterval(()=>{
        setTimeElapsed(oldTime=>oldTime+1)
      },1000)
    }

    return()=>{
      clearInterval(id)
    }

  },[startCouting])

  const minutes=timeElapsed/60
  return(
  <div>
    <p>Time:{timeElapsed}</p>
  <p>Speed:{((correctWords/minutes) || 0).toFixed(2)} WPM</p>
  </div> )

}

function App() {

  const[userInput,setUserInput]=useState('')

  const cloud=useRef(getCloud())

  const[startCouting,setStartCounting]=useState(false)

  const [activeWordIndex,setActiveWordIndex]=useState(0);
  const [correctWordArray,setCorrectWordArray]=useState([])
  

  function processInput(value){

    //Todo:add validation for the quiz end
    //word count and a timer
   
    //Todo:restart button

    if(activeWordIndex === cloud.current.length){
      return 
    }
    if(!startCouting){
      setStartCounting(true)
    }
  
    if(value.endsWith(' ')){
      //user finished the word

      if(activeWordIndex === cloud.current.length-1){
        //overflow
        setStartCounting(false)
        setUserInput('Your time completed')
        return
      }else{
        setUserInput('')
      }

      setActiveWordIndex(index=>index+1)
     
      
      
      setCorrectWordArray(data=>{

      const word=value.trim()
        const newResult=[...data]
        newResult[activeWordIndex]=word === cloud.current[activeWordIndex]
        return newResult
      })

    }else{
      setUserInput(value)
    }
  }
  return (
    <div className="App">
  
   <h1>Typing test</h1>
   <Timer
   startCouting={startCouting}
   correctWords={correctWordArray.filter(Boolean).length}
   />

   <p>{cloud.current.map((word,index)=>{

   <Word 
   text={word}
   active={index=activeWordIndex}
   correct={correctWordArray[index]}
   />
   })}</p>

   <input
    type='text' 
   placeholder='Start typing...'
   value={userInput}
   onChange={(e)=>processInput(e.target.value)}/>
    </div>
  );
}

export default App;
