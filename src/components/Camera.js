import React, { Component } from 'react';

class Camera extends Component {

  componentWillMount() {
    const { video, audio } = this.props;
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({ video, audio })
      .then((mediaStream) => {
        this.setState({ mediaStream });
        this.video.srcObject = mediaStream;
        this.video.play();
      })
      .catch(error => error);
    }
  }

  capture() {
    const mediaStreamTrack = this.state.mediaStream.getVideoTracks()[0];
    const imageCapture = new window.ImageCapture(mediaStreamTrack);

    return imageCapture.takePhoto();
  }

  render() {
    return (
      <div style={this.props.style}>
        { this.props.children }
        <video style={styles.base} ref={(video) => { this.video = video; }} />
      </div>
    );
  }
}

export default Camera;

const styles = {
  base: {
    width: '100%',
    height: '100%'
  }
};