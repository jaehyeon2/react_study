class HelloWorld extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'1. Hello World!'
			),
			React.createElement(
				'h1',
				null,
				'2. Hello World!'
			)
		);
	}
}
ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));
