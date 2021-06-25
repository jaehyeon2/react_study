class Mouse extends React.Component{
	handleMouseOver(event){
		console.log('mouse is over with event')
		window.e=event//anti-pattern
		console.dir(event.target)
		setTimeOut(()=>{
			console.table(event.target)
			console.table(window.e.target)
		}, 2345)
	}
	render(){
		return (
			<div>
				<div
					style={{border:'1px solid red'}}
					onMouseOver={this.handleMouseOver.bind(this)}>
				Open DevTools and move your mouse sursor over here
				</div>
			</div>
		)
	}
}