import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className={"title red"}>Seïf</h1>

        <br></br>

        <img src="/image1.png" alt=""></img>

        <br></br>

        <img
          src="./image2.png"
          alt=""
          style={{ width: 350, height: 300 }}
        ></img>
        {/* any img in the src doesn't display idk why!!! it's not related to the picture */}
      </div>

      <div>
        <video width={320} height={240} controls>
          <source src="/batman.mp4" type="video/mp4"></source>
        </video>
      </div>
    </React.Fragment>
  );
}

export default App;
