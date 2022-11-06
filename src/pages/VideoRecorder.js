import React from "react";
import VideoRecorder from "react-video-recorder";
import Header from "../components/Header";
import ProgressBar from "../components/PrgressBar";
import { db, storage } from "../firebase";

const VideoTaker = () => {
  const [progress, setProgress] = React.useState(0);

  return (
    <div>
      <Header />
      {progress !== 0 ? (
        <ProgressBar bgcolor="red" progress={progress} height="20px" />
      ) : (
        ""
      )}
      <VideoRecorder
        isFlipped={false}
        // isOnInitially
        countdownTime={0}
        mimeType="video/webm;codecs=vp8,opus"
        constraints={{
          audio: false, //true
          video: {
            width: { exact: 1080, ideal: 1080 },
            height: { exact: 1920, ideal: 1920 },
            // aspectRatio: { exact: 0.7500000001, ideal: 0.7500000001 },
            aspectRatio: { exact: 1, ideal: 1 },
            resizeMode: "crop-and-scale",
          },
        }}
        onRecordingComplete={async (videoBlob) => {
          let date = new Date();

          let fileName =
            date.toLocaleDateString().replaceAll("/", "-") +
            "-" +
            date.getTime();
          await storage.ref(fileName);
          let uploadTask = storage.ref(fileName).put(videoBlob);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              setProgress(progress);
              switch (snapshot.state) {
                case "paused": // or 'paused'
                  console.log("Upload is paused");
                  break;
                case "running": // or 'running'
                  console.log("Upload is running");
                  break;
                default:
                  break;
              }
            },
            (error) => {
              // Handle unsuccessful uploads
              alert(error)
            },
            () => {
              // alert("error")
              // Handle successful uploads on complete
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                db.collection("videos").doc(fileName).set({
                  videoUrl: downloadURL,
                });
                setProgress(0);
              });
            }
          );
        }}
      />
    </div>
  );
};

export default VideoTaker;
