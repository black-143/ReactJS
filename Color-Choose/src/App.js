import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [color,setColor]=useState("");

  const [answers,setAnswers]=useState([]);
  const [isWrongSelection,setIsWrongSelection]=useState(false);

  const getRandomColor=()=>{
    const digits = ['0','1','2','3','4','5','6','7','8','9',
  'A','B','C','D','E','F']

  const color =  new Array(6).fill('')
  .map(()=>{
    digits[parseInt(Math.floor(Math.random()*digits.length)%6)]
  }).join("")

  return `${colors}`
  }
  useEffect(()=>{
    const actualColor=getRandomColor();
    setColor(actualColor)
    setAnswers([
      actualColor,getRandomColor(),getRandomColor()].sort(()=>1-Math.random()))

    //TODO generate a random color
    setColor(getRandomColor())
  },[])

  function handleAnswerClicked(answer){
      if(answer == color){
        //Todo guess crct answer
        setIsWrongSelection(false)

      }else{
        setIsWrongSelection(true)
      }
  }
  return (
    <div className="App">
     <div className='guess-me'
     style={{backgroundColor:color}}>
      {
        answers.map((answer)=>{
          <button key={answer}
          onClick={()=>handleAnswerClicked(answer)}>{answer}</button>
        })
      }

     </div>
     {isWrongSelection && <div className='wrong'> Wrong Answer</div>}

    </div>
  );
}

export default App;
