const React = require("react");
const MsgList = require("./MsgList.jsx");
const NewMsg = require("./NewMsg.jsx");

class MsgBoard extends React.Component {
    constructor(props) {
      super(props);
      this.state = { messages: this.props.messages};
      this.addMessage = this.addMessage.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3003/msgs')
			.then(response=> this.handleHTTPErrors(response))
			.then(response=> response.json())
			.then(result=> {
				this.setState( { messages: result});
			})
			.catch(errors=> { 
				console.log(error);
			})
        }
    
    handleHTTPErrors(response) {
        if (!response.ok) throw Error(response.status + ': ' + response.statusText);
		return response;
    }

    addMessage() {
        let msgs = this.state.messages;

        // add id attribute
        message.id = msgs.length;
        // append to array
        msgs.push(message);
        // update state var
        this.setState( { messages: msgs });

        fetch('http://localhost:3003/msgs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messages)
        })
        .then(response=> this.handleHTTPErrors(response))
        .catch(error=> {
            console.log(error);
        })
    }
  
    render() {
        return (
            <div>
                <NewMsg addMsgCallback = { this.addMessage } />
                <MsgList messages={ this.state.messages }/>
            </div>
        );
    }
}

module.exports = MsgBoard;