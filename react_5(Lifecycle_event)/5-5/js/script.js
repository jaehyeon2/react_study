let dataUrl = '/react_5\(Lifecycle_event\)/5-5/real-user-data.json';
ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(Users, { 'data-url': dataUrl })
), document.getElementById('content'));