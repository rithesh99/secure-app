import React from "react";
import Webcam from "react-webcam";

function ImageTaker() {
  const webcamRef = React.useRef(null);
  const [src, setSrc] = useState("");
  const capture = () => {
    setSrc(webcamRef.current.getScreenshot());
  };
  return (
    <div>
      <Webcam
        audio={false}
        width="100%"
        height="100%"
        ref={webcamRef}
        screenshotFormat="image/jpeg"
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
