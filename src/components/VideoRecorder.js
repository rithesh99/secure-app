import React from 'react'
import VideoRecorder from 'react-video-recorder';
// import fileDownload from 'js-file-download';

const VideoRecorderComponent = () => {

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
          resizeMode: "crop-and-scale"
        }
      }}
      onRecordingComplete={(videoBlob) => {
        // Do something with the video...
        console.log("videoBlob", videoBlob);
        // fileDownload(videoBlob, 'videoz.mp4');
        console.log("window.URL.createObjectURL(location.state.videoBlob)", window.URL.createObjectURL(videoBlob))
      }}
    //  renderActions={({
    //   onStartRecording,
    //   onStopRecording,
    //   isCameraOn,
    //   streamIsReady,
    //   isVideoInputSupported,
    //   isInlineRecordingSupported,
    //   thereWasAnError,
    //   isConnecting,
    //   isRunningCountdown,
    //   isReplayingVideo
    // }) => {
    //   console.log({ isReplayingVideo });
    //   if (
    //     (!isInlineRecordingSupported && !isVideoInputSupported) ||
    //     thereWasAnError ||
    //     isConnecting ||
    //     isRunningCountdown ||
    //     isReplayingVideo
    //   ) {
    //     return null;
    //   }

    //   return (
    //     <div style={{ position: "absolute", bottom: "10%" }}>
    //       <button
    //         onClick={() => {
    //           // if (isCameraOn && streamIsReady) {
    //             onStartRecording();
    //           // }
    //         }}
    //       >
    //         Record
    //       </button>
    //       <button onClick={onStopRecording}>Stop</button>
    //     </div>
    //   );
    // }} 
    />
  );
};

export default VideoRecorderComponent