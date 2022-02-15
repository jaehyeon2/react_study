class Content extends React.Component {
	render() {
		let link;
		if (this.props.verify) link = React.createElement(
			'a',
			{ href: '/logout' },
			'Logout'
		);else link = React.createElement(
			'a',
			{ href: '/login' },
			'Login'
		);
		return React.createElement(
			'div',
			null,
			link
		);
	}
}

ReactDOM.render(React.createElement(Content, { verify: false }), //verify 값에 따라 링크 변경
document.getElementById('content'));
