const React = require("react");
const Message = require("./Message.jsx");

class MsgList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col" className="w-10">
              #(msg number)
            </th>
            <th scope="col" className="w-10">
              Name
            </th>
            <th scope="col" className="w-80">
              Message
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.messages.map((message, index) => (
            <Message
              key={message._id}
              username={this.props.username}
              message={message}
              index={index}
              updateMessageCallback={this.props.updateMessageCallback}
              deleteMessageCallback={this.props.deleteMessageCallback}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

module.exports = MsgList;
