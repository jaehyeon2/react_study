class Content extends React.Component{
	getUrl(){
		return 'http://github.com/jaehyeon2'
	}
	render(){
		return (
			<div>
				<p>my github repository:<a href={this.getUrl()}>{this.getUrl()}</a></p>
			</div>
		)
	}
}

ReactDOM.render(
	<Content/>,
	document.getElementById('content')
)