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

ReactDOM.render(React.createElement(Content, { verify: 'true' }), //verify 값의 유무에 따라 링크 변경
document.getElementById('content'));
