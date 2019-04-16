const React = require("react");

class Message extends React.Component {
  constructor(props) {
    super(props);
	this.deleteMessage = this.deleteMessage.bind(this);
	this.setEditMode = this.setEditMode.bind(this);
	this.updateMessage = this.updateMessage.bind(this);
	this.handleText = this.handleText.bind(this);
	this.state = { msg: "", editMode: false };
  }

  handleText(event) {
      this.setState({
        msg: event.target.value
      });
  }

  setEditMode(event) {
	  event.preventDefault();
	  this.setState({editMode: !this.state.editMode});
  }

  updateMessage(event){
	  event.preventDefault();
	  let message_id = this.props.message._id;
	  let messageBody = this.state.msg
	  this.props.updateMessageCallback({ messageID: message_id, messageBody: messageBody });
	  this.setState({editMode: false})
  }

  deleteMessage(event) {
    event.preventDefault();
    // console.log(JSON.stringify(this.props));
    let message_id = this.props.message._id;
    this.props.deleteMessageCallback({ message_id });
  }

  render() {
	if (this.props.username === this.props.message.name && this.state.editMode) {
		// If owner of message and editMode true
		return (
		  <tr>
			<td>{this.props.index + 1}</td>
			<td>{this.props.message.name}</td>
			<td>{this.props.message.msg}</td>
			<td>
				<input id="msg" type="text" className="form-control" placeholder="Edit Message" value={this.state.msg} onChange={this.handleText} />
				<button className="btn btn-secondary" value={this.state.msg} onClick={this.updateMessage}>Update</button>
				<button className="btn btn-secondary" onClick={this.setEditMode}>Cancel</button>
			</td>
		  </tr>
		);
	}
    if (this.props.username === this.props.message.name) {
      // If owner of message
      return (
        <tr>
          <td>{this.props.index + 1}</td>
          <td>{this.props.message.name}</td>
          <td>{this.props.message.msg}</td>
			<td>
              <button className="btn btn-secondary" onClick={this.setEditMode}>
			  Edit
			  </button>
			  </td>
			  <td>
              <button className="btn btn-danger" onClick={this.deleteMessage}>
                Delete
              </button>
			  </td>
        </tr>
      );
    } else {
      // Else not owner
      return (
        <tr>
          <td>{this.props.index + 1}</td>
          <td>{this.props.message.name}</td>
          <td>{this.props.message.msg}</td>
        </tr>
      );
    }
  }
}

module.exports = Message;
