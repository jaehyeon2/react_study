class Note extends React.Component {
	confirmLeave(e){
		let confirmationMessage='정말 닫으시겠습니까?'
		e.returnValue=confirmationMessage
		return confirmationMessage
	}
	componentDidMount(){
		console.log('beforeunload 이벤트에 confirmLeave 이벤트 등록')
		window.addEventListener('beforeunload', this.confirmLeave)
	}
	componentWillUnMount(){
		console.log('beforeunload 이벤트에 confirmLeave 이벤트 제거')
		window.removeEventListener('beforeunload', this.confirmLeave)
	}
	render(){
		console.log('Render')
		return (
			<div>
				<p>부모 컴포넌트는 {this.props.secondsLeft}초 후에 제거된다.</p>
				<input type="text"/>
			</div>
		)
	}
}