class Content extends React.Component {
	getUrl() {
		return 'http://github.com/jaehyeon2';
	}
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'my github repository:',
				React.createElement(
					'a',
					{ href: this.getUrl() },
					this.getUrl()
				)
			)
		);
	}
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
