import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


const numbers=[1,2,3,4,5,6,7,8,9,0]

const password='4299'

function App() {

  const [pressedNumbers,setPressedNumbers]=useState<number>([])
  const [error,setError]=useState('')
  const [isCorrect,setIsCorrect]=useState(false)

  useEffect(()=>{
    if(pressedNumbers.length === 1){
      setError("")
    }
    else if(pressedNumbers.length === password.length){
      if(pressedNumbers.join('')=== password){
        console.log('correct password')
        setIsCorrect(true)
      }else{
        console.log('incorrect password')
        
        setError("bad password")
        setPressedNumbers([])
      }
    }
  },[pressedNumbers])
  return (
    <div className="App">
       {isCorrect ><div>Success !</div>}
      {JSON.stringify(pressedNumbers)}
      {error}
     <div className='number-pad'>
     {
      numbers.map((number,index)=>{
        return(
          <button
          className={number === 0 ?"zero":""}
          key={index}
          onClick={()=>{
            setPressedNumbers((cur)=>[...cur,number])
          }}>{number}</button>
        )
      })
     }
     </div>
    </div>
  );
}

export default App;
