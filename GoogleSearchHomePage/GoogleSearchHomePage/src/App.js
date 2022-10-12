import "./styles.css";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlinedIcon";
import MicOutlinedIcon from "@mui/icons-material/MicOutlinedIcon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="classic"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />
        <>
          <TextField
            className="inputRounded"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon sx={{ fontSize: 30 }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <MicOutlinedIcon sx={{ color: "#0089ff", fontSize: 30 }} />
                </InputAdornment>
              )
            }}
          />
        </>

        <div>
          <button className="button1">Google Search</button>
          <button className="feeling">I'm Feeling Lucky</button>
        </div>
      </header>
    </div>
  );
}

export default App;
