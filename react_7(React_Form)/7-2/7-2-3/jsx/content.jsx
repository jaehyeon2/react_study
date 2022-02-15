class Content extends React.Component{
	constructor(props){
		super(props)
		this.submit=this.submit.bind(this)
		this.prompt='Please enter your email to win'
	}
	submit(event){
		let emailAddress=this.refs.emailAddress
		let comments=this.refs.comments
		console.log("email:", ReactDOM.findDOMNode(emailAddress).value)
		console.log("comment:", ReactDOM.findDOMNode(comments).value)
	}
	render(){
		return(
			<div className="well">
				<p>{this.prompt}</p>
				<div className="form-group">
					Email:<input ref="emailAddress" className="form-control" type="text"
							  placeholder="email@gmail.com"/>
				</div>
				<div className="form-group">
					Comments:<textarea ref="comments" className="form-control"
								 placeholder="type yout comment!"/>
				</div>
				<div className="form-group">
					<a className="btn btn-primary" value="Submit" onClick={this.submit}>submit</a>
				</div>
			</div>
		)
	}
}