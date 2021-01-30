import React from "react";
import "./styles.css";

const display = {
  display: "block"
};
const hide = {
  display: "none"
};
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  closeModal = () => {};
  sendMessageModal = () => {};

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="modal " style={this.props.toggle ? display : hide}>
          <div className="modal-content">
            <h4>Subscription</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">
                  Recipient:
                </label>
                <input type="text" class="form-control" id="recipient-name" />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">
                  Message:
                </label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => this.props.closeModal()}
            >
              Close
            </button>
            <button 
                type="button" 
                class="btn btn-primary"
                onClick={() => this.props.sendMessageModal()}
                >
              Send message
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;