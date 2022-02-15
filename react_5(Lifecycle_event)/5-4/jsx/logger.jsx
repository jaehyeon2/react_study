class Logger extends React.Component{
	constructor(props){
		super(props)
		console.log('constructor')
	}
	componentWillMount(){
		console.log('conponentWillMount 실행')
	}
	componentDidMount(e){
		console.log('componentDidMount 실행')
		console.log('DOM node: ', ReactDOM.findDOMNode(this))
	}
	componentWillReceiveProps(newProps){
		console.log('componentWillReceiveProps 실행')
		console.log('new Props: ', newProps)
	}
	shouldComponentUpdate(newProps, newState){
		console.log('shouldComponentUpdate 실행')
		console.log('new Props: ', newProps)
		console.log('new State: ', newState)
		return true
	}
	componentWillUpdate(newProps, newState) {
		console.log('componentWillUpdate is triggered')
		console.log('new props: ', newProps)
		console.log('new state: ', newState)
	}
	componentDidUpdate(oldProps, oldState) {
		console.log('componentDidUpdate is triggered')
		console.log('old props: ', oldProps)
		console.log('old state: ', oldState)
	}
	componentWillUnmount() {
		console.log('componentWillUnmount')
	}
	render() {
		console.log('rendering... Display')
		return (
			<div>{this.props.time}</div>
		)
	}
}