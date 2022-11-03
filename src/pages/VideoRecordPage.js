import React, { useState } from "react";
import VideoRecorderComponent from "../components/VideoRecorder";

const VideoRecordPage = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "100%" }}>
        <VideoRecorderComponent />
      </div>
    </div>
  );
};

export default VideoRecordPage;
