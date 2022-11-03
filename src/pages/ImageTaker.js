import React from "react";
import Webcam from "react-webcam";
import { db } from "../firebase";

function ImageTaker() {
  const webcamRef = React.useRef(null);
  const capture = () => {
    let date = new Date();
    db.collection("pics")
      .doc(date.toLocaleDateString().replaceAll('/','-') + '-' + date.getTime())
      .set({
        imageUrl: webcamRef.current.getScreenshot()
      })
  };
  return (
    <div>
      <Webcam
        audio={false}
        width="100%"
        height="100%"
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        screenshotQuality={1}
        videoConstraints={{
          width: 1280,
          height: 720,
          facingMode: "user",
        }}
      />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
}

export default ImageTaker;
