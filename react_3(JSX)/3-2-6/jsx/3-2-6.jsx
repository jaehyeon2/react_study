class Content extends React.Component{
	render(){
		let link
		if (this.props.verify)
			link = <a href='/logout'>Logout</a>
		else
			link = <a href='/login'>Login</a>
		return <div>{link}</div>
	}
}

ReactDOM.render(
	<Content verify="true"/>,//verify 값의 유무에 따라 링크 변경
	document.getElementById('content')
)