class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = { textbook: '' };
		this.handlechange = this.handlechange.bind(this);
	}
	handlechange(event) {
		console.log(event.target.value);
		this.setState({ textbook: event.target.value });
	}
	render() {
		return React.createElement(
			"div",
			null,
			React.createElement("input", {
				type: "text",
				onChange: this.handlechange,
				placeholder: "text----text" }),
			React.createElement("br", null),
			React.createElement(
				"span",
				null,
				this.state.textbook
			)
		);
	}
}