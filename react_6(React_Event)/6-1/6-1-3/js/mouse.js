class Mouse extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{
					style: { border: '1px solid red' },
					onMouseOver: event => {
						console.log('mouse is over with event');
						console.dir(event);
					} },
				'Open DevTools and move your mouse cursor over here'
			)
		);
	}
}

/*onMouseOver={this.handleMouseOver.bind(this)}*/
/*onMouseOver={((event)=>{
						console.log('mouse is over with event')
						console.dir(event)})}*/