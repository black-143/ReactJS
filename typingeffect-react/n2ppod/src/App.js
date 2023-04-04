import "./styles.css";
import TypeText from './TypeText'

const config={
  text:"like share and Subscribe to Namaste JS",
  typeSpeed:20
}

export default function App() {
  return (
    <div>
      <TypeText config={config}/>
    </div>
  );
}
