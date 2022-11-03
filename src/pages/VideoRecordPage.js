import React, { useRef, useState } from 'react'
import VideoRecorderComponent from '../components/VideoRecorder';
import Webcam from "react-webcam";

const VideoRecordPage = (props) => {
    const webcamRef = React.useRef(null);
    const [src, setSrc] = useState('')
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setSrc(webcamRef.current.getScreenshot())
        },
        [webcamRef]
    );
    return (
        <div>
            <div style={{ width: "100%", height: "100%" }}>
                <VideoRecorderComponent />
                {/* <div>
                    <Webcam audio={false}
                        width="100%"
                        height="100%"
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{
                            width: 1280,
                            height: 720,
                            facingMode: "user"
                        }}
                    />
                    <button onClick={capture}>Capture photo</button>
                    <img src={src}/>
                </div> */}
            </div>
        </div >
    );
};

export default VideoRecordPage