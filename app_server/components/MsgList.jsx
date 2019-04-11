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
            <th scope="col" className="w-25">
              #(msg number)
            </th>
            <th scope="col" className="w-25">
              Name
            </th>
            <th scope="col" className="w-50">
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
              deleteMessageCallback={this.props.deleteMessageCallback}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

module.exports = MsgList;
