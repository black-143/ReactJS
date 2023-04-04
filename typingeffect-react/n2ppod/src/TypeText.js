
import {useState,useEffect} from "react"
export default function TypeText({config}){

let timer;
 const[state,setState] = useState({
      typedtext:'',
      currentIndex:0
    })

  const fun=()=>{
  timer=  setTimeout(() => {
      if(state.currentIndex < config.text.length){
        const currentText=config.text[state.currentIndex]
        setState({
          typedtext:state.typedtext + currentText,
          currentIndex:state.currentIndex+1
        })
      }
      fun()
    }, 1000/config.typeSpeed);
  }
  useEffect(()=>{
    fun();
    return ()=>clearInterval(timer)
  },[state.typedtext])
  return(
    <h1>{config.text}</h1>
  )
}