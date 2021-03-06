const React = require("react");

class NewMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      msg: "",
      userCredentials: this.props.userCredentials
    };
    this.handleText = this.handleText.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }
  handleText(event) {
    if (event.target.id === "name") {
      this.setState({
        name: event.target.value
      });
    } else {
      this.setState({
        msg: event.target.value
      });
    }
  }

  addMessage(event) {
    event.preventDefault();
    //save state vars to local
    let name = this.props.username;
    let msg = this.state.msg;
    // make sure neither field is empty
    if (!name || !msg) {
      return console.error("Name and/or Msg cannot be empty");
    }
    // trim any whitespace
    name = name.trim();
    msg = msg.trim();
    // pass control to MsgBoard so it can make the API Call and update message
    this.props.addMsgCallback({ name: name, msg: msg });
    this.setState({ name: this.props.username, msg: "" });
  }

  deleteAll(event) {
    event.preventDefault();
    this.props.deleteAllMessageCallback();
  }

  render() {
    if (this.props.userCredentials === "Admin") {
      return (
        <div>
          <form onSubmit={this.addMessage}>
            <div className="form-group">
              <div className="row">
                <label htmlFor="name" className="col-1 col-form-label">
                  User Name:
                </label>
                <label htmlFor="msg" className="col-7 col-form-label">
                  Enter Message:
                </label>
              </div>
              <div className="row">
                <div className="col-1">
                  <h3>
                    <label id="name" className="badge badge-info">
                      {this.props.username}
                    </label>
                  </h3>
                </div>
                <div className="col-8">
                  <input
                    id="msg"
                    type="text"
                    className="form-control"
                    placeholder="Your Message"
                    value={this.state.msg}
                    onChange={this.handleText}
                  />
                </div>
                <div className="col-1">
                  <button type="submit" className="btn btn-primary">
                    Post
                  </button>
                </div>
                <div className="col-2">
                  <button className="btn btn-danger" onClick={this.deleteAll}>
                    Delete All
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.addMessage}>
            <div className="form-group">
              <div className="row">
                <label htmlFor="name" className="col-1 col-form-label">
                  User Name:
                </label>
                <label htmlFor="msg" className="col-7 col-form-label">
                  Enter Message:
                </label>
              </div>
              <div className="row">
                <div className="col-1">
                  <h3>
                    <label id="name" className="badge badge-info">
                      {this.props.username}
                    </label>
                  </h3>
                </div>
                <div className="col-8">
                  <input
                    id="msg"
                    type="text"
                    className="form-control"
                    placeholder="Your Message"
                    value={this.state.msg}
                    onChange={this.handleText}
                  />
                </div>
                <div className="col-1">
                  <button type="submit" className="btn btn-primary">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

module.exports = NewMsg;
