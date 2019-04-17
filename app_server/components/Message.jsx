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
    this.setState({ editMode: !this.state.editMode });
  }

  updateMessage(event) {
    event.preventDefault();
    let message_id = this.props.message._id;
    let messageBody = this.state.msg;
    if (messageBody !== "") {
      this.props.updateMessageCallback({
        messageID: message_id,
        messageBody: messageBody
      });
      this.setState({ editMode: false });
      this.setState({ msg: "" });
    }
  }

  deleteMessage(event) {
    event.preventDefault();
    // console.log(JSON.stringify(this.props));
    let message_id = this.props.message._id;
    this.props.deleteMessageCallback({ message_id });
  }

  render() {
    if (
      this.props.username === this.props.message.name &&
      this.state.editMode
    ) {
      // If owner of message and editMode true
      return (
        <tr>
          <th scope="row">{this.props.index + 1}</th>
          <td>{this.props.message.name}</td>
          <td className="w-100">{this.props.message.msg}</td>
          <td>
            <input
              id="msg"
              type="text"
              placeholder="Edit Message"
              value={this.state.msg}
              onChange={this.handleText}
            />
          </td>
          <td>
            <button
              className="btn btn-success"
              value={this.state.msg}
              onClick={this.updateMessage}
            >
              Update
            </button>
          </td>
          <td>
            <button className="btn btn-warning" onClick={this.setEditMode}>
              Cancel
            </button>
          </td>
        </tr>
      );
    }
    if (this.props.username === this.props.message.name) {
      // If owner of message only; editMode not on
      return (
        <tr>
          <th scope="row">{this.props.index + 1}</th>
          <td>{this.props.message.name}</td>
          <td className="w-100">{this.props.message.msg}</td>
          <td />
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
          <th scope="row">{this.props.index + 1}</th>
          <td>{this.props.message.name}</td>
          <td colSpan="4">{this.props.message.msg}</td>
        </tr>
      );
    }
  }
}

module.exports = Message;
