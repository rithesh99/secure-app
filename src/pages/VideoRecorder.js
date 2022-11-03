import React from "react";
import VideoRecorder from "react-video-recorder";
import { db, storage } from "../firebase";
// import fileDownload from 'js-file-download';

const VideoTaker = () => {
  return (
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
        // Do something with the video...
        console.log("videoBlob", videoBlob);
        let date = new Date();
        // fileDownload(videoBlob, 'videoz.mp4');

        let fileName = date.toLocaleDateString().replaceAll('/', '-') + '-' + date.getTime();
        await storage.ref(fileName)
        let uploadTask = storage.ref(fileName).put(videoBlob);
        uploadTask.on('state_changed',
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused': // or 'paused'
                console.log('Upload is paused');
                break;
              case 'running': // or 'running'
                console.log('Upload is running');
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
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log('File available at', downloadURL);

              db.collection("videos")
                .doc(fileName)
                .set({
                  videoUrl: downloadURL
                })
            });
          });


      }}
    />
  );
};

export default VideoTaker;
