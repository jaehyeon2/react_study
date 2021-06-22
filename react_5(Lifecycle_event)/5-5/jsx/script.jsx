let dataUrl = '/react_5\(Lifecycle_event\)/5-5/real-user-data.json'
ReactDOM.render(
	<div>
		<Users data-url={dataUrl}/>
	</div>,
	document.getElementById('content')
)