import React from "react";
import Camera from "../components/Camera";
import Header from "../components/Header";
import ProgressBar from "../components/PrgressBar";
import { db, storage } from "../firebase";

export default function ImageTaker() {
  const [progress, setProgress] = React.useState(0);

  let camera = React.useRef();

  async function uploadPic(blob) {
    let date = new Date();

    let fileName =
      date.toLocaleDateString().replaceAll("/", "-") + "-" + date.getTime();
    await storage.ref(fileName);
    let uploadTask = storage.ref(fileName).put(blob);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
      },
      () => {
        // Handle successful uploads on complete
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          db.collection("pics").doc(fileName).set({
            imageUrl: downloadURL,
          });
          setProgress(0);
        });
      }
    );
  }

  function takePicture() {
    camera.capture().then((blob) => {
      // this.img.src = URL.createObjectURL(blob);
      uploadPic(blob);
    });
  }

  return (
    <div style={style.container}>
      <Header/>
      {progress !== 0 ? (
        <ProgressBar bgcolor="red" progress={progress} height="20px" />
      ) : (
        ""
      )}
      <Camera
        style={style.preview}
        ref={(cam) => {
          camera = cam;
        }}
        audio={false}
        video={true}
      >
        <div style={style.captureContainer} onClick={takePicture}>
          <div style={style.captureButton} />
        </div>
      </Camera>
      {/* <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
          alt="pic"
        /> */}
    </div>
  );
}

const style = {
  preview: {
    position: "relative",
  },
  captureContainer: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    zIndex: 1,
    bottom: 0,
    width: "100%",
  },
  captureButton: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    height: 56,
    width: 56,
    color: "#000",
    margin: 20,
  },
  captureImage: {
    width: "100%",
  },
};
