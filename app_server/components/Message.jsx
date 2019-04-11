const React = require("react");

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  deleteMessage(event) {
    event.preventDefault();
    // console.log(JSON.stringify(this.props));
    let message_id = this.props.message._id;
    this.props.deleteMessageCallback({ message_id });
  }

  render() {
    if (this.props.username === this.props.message.name) {
      // If owner of message
      return (
        <tr>
          <td>{this.props.index + 1}</td>
          <td>{this.props.message.name}</td>
          <td>
            {this.props.message.msg}
            <div className="text-right">
              <button className="btn btn-secondary">Edit</button>
              <button onClick={this.deleteMessage} className="btn btn-danger">
                Delete
              </button>
            </div>
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
