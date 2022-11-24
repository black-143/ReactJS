import "./styles.css";

export default function App() {

  function SlotM(props){
    let x1=props.x
    let y1=props.y
    let z1=props.z
    if(x1==y1 && y1==z1){
      return(
        <>
        <h1 className="innter_slot">
          {" "}
          {x1} {y1} {z1}
          </h1>
          <p>Slots are matched</p>
        </>
      )
    }
    else{
      return(
        <>
        <h1 className="innter_slot">
          {" "}
          {x1} {y1} {z1}
          </h1>
          <p>Slots are Not matched</p>
        </> 
      )
    }
    }
    return (
      <div className="App">
       <h2> Slot Machine </h2>
        <SlotM x="😀" y="😀" z="😀"/>
        <SlotM x="😀" y="😃" z="😀"/>
        <SlotM x="😀" y="😀" z="😁"/>

      </div>
    );
  }

