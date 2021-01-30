import React from "react";
import Modal from "./Modal";
import Conference from "./reactJs_Conferenc.mp4";
import "./styles.css"

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      toggle: false
    };
  }
  toggle = (event) => {
    const { toggle } = this.state;
    this.setState({
      toggle: !toggle
    });
  };
  getVideo = elem => {
    this.video = elem
  }
  componentDidMount = () => {
    this.playVideo()
    setTimeout(() => {
      this.toggle();
      this.pauseVideo()
    }, 10000);
  };

  componentWillUnmount = () => {
    this.pauseVideo();
  };

  playVideo = () => {
    // You can use the play method as normal on your video ref
    this.myRef.current.play();
  };

  pauseVideo = () => {
    // Pause as well
    this.myRef.current.pause();
  };
  closeModal = () => {
    const { toggle } = this.state;
    this.setState(
      {
        toggle: !toggle
      },
      this.playVideo()
    );
  };
  sendMessageModal = () => {
      const { toggle } = this.state;
      this.setState(
          {
              toggle: !toggle
          },
          this.playVideo()
      );
  };
  render = () => {
    return (
      <div >
        <video
          ref={this.myRef}
          src={Conference}
          type="video/mp4"
          autoplay 
          
        />

        <Modal
          toggle={this.state.toggle}
          closeModal={() => this.closeModal()}
          sendMessageModal={() => this.sendMessageModal() }
        />
      </div>
    );
  };
}

export default Video;