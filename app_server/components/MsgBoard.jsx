const React = require("react");
const MsgList = require("./MsgList.jsx");
const NewMsg = require("./NewMsg.jsx");

class MsgBoard extends React.Component {
    constructor(props) {
      super(props);
      this.state = { messages: this.props.messages};
      this.addMessage = this.addMessage.bind(this);
    }

    addMessage() {
        // TO DO MAKE API CALL TO STORE A NEW MESSAGE IN UPDATE VAR MESSAGE
    }
  
    render() {
        return (
            <div>
                <NewMsg addMsgCallback = { this.addMessage} />
                <MsgList messages={ this.state.messages }/>
            </div>
        );
    }
}

module.exports = MsgBoard;