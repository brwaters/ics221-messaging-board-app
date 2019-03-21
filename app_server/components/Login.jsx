const React = require("react");

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" }
		this.handleText = this.handleText.bind(this);
		this.login = this.login.bind(this);
		this.register = this.register.bind(this);

	}
	handleText(event) {
		if (event.target.id === 'email') {
			this.setState({
				email: event.target.value
			});
		} else {
			this.setState({
				password: event.target.value
			});
		}
	}

	login(event) {
		event.preventDefault();
		// pass control to MsgBoard and send the email and pass the user entered
		this.props.loginCallback({
			email: this.state.email,
			password: this.state.password,
		});
	}

	register(event) {
		this.props.registerCallback()
	}
	render() {
		let loginFailText;
		if (this.props.loginFail) {
			loginFailText = <p className="card-text pt-1 text-danger">Failed Login Attempt. &nbsp;{this.props.loginAttempts} attempts remaining.</p>
		}
		return (
			<div className="card form-group">
				<form onSubmit={this.Login}>
					<div className="form-group">
						<div className="row ml-2">
							<label htmlFor="email"
								className="col-3 col-form-label">
								Username:
							</label>
							<label htmlFor="password" className="col-3 col-form-label">
								Password:
							</label>
							</div>
							<div className="row ml-2">
								<div className="col-3">
									<input id="email" type="text" className="form-control"
										placeholder="Enter email" value={this.state.email}
										onChange={this.handleText} />
								</div>
								<div className="col-3">
									<input id="password" type="password" className="form-control"
										placeholder="Enter password" value={this.state.password}
										onChange={this.handleText}
									/>
								</div>
								<div className="col-2">
									<button type="submit" className="btn btn-primary">
										Login
				  </button>
								</div>
							</div>
					</div>
				</form>
				<div className="row ml-2 mb-2">
				<div className="col-5">
					Not registered? &nbsp;
			<button type="submit" className="btn btn-secondary" onClick={this.register}>Register</button></div>
				{loginFailText}</div>
				</div>
		)
	}

}

module.exports = Login;