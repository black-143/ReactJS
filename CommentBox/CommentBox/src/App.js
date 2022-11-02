import "./styles.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function App() {
  const [postcomment, setPostComment] = useState("");
  const [name, setName] = useState("");
  const [userComments, setUserComments] = useState([{}]);
  const [showComments, setShowComments] = useState(false);
  const handleClick = (e) => {
    let commentData = { name: name, postcomment };
    setName("");
    setPostComment("");
    setUserComments(userComments.concat([commentData]));
  };

  const handleChange = (e) => {
    setPostComment(e.target.value);
  };

  const handleChange1 = (e) => {
    setName(e.target.value);
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
  };
  return (
    <div className="App">
      <h2>Comment Box</h2>
      <div className="discussion">
        <div className="inside">
          <TextField
            className="name"
            id="standard-basic"
            label="Name"
            variant="standard"
            value={name}
            onChange={handleChange1}
            placeholder="Name"
          />
          <br />
          <TextField
            className="comment"
            placeholder="Comments"
            id="standard-basic"
            label="Comments"
            variant="standard"
            value={postcomment}
            onChange={handleChange}
          />
          <br />
          <button className="post" onClick={handleClick}>
            Post comment
          </button>
        </div>
        <button className="button1" onClick={handleShowComments}>
          {showComments ? "Hide comments" : "Show comments"}
        </button>
        {showComments &&
          userComments.slice(1).map((usercomment) => {
            return (
              <>
                <p className="author-name">{usercomment.name}</p>
                <p className="author-comment">- {usercomment.postcomment}</p>
                <hr className="line" />
              </>
            );
          })}
      </div>
    </div>
  );
}
