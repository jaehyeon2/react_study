class ClickCounterButton extends React.Component{
	render(){
		return(
			<button
				onClick={this.props.handler}
				className="btn btn-danger">
			Increase Volume (current volume is {this.props.counter})
			</button>
		)
	}
}