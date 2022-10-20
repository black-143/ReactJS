import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import "./styles.css";

export default function App() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    if (isListening === false) resetTranscript();
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous: true
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };
  return (
    <div className="App">
      <h1> Speech to Text </h1>
      <input type="text" className="input-field" value={transcript} />
      <FaMicrophone
        onClick={isListening ? stopHandle : handleListing}
        style={{
          backgroundColor: "white",
          color: isListening ? "red" : "green",
          fontSize: "1.25em",
          marginTop: "0px"
        }}
      />
    </div>
  );
}
