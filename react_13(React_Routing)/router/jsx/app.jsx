const ReactRouter=require('react-router')

let{Router,
	Route,
	Link
}=ReactRouter

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={content}>
			<Route path="/about" component={About}/>
			<Route path="/posts" component={Posts} posts={posts}/>
			<Route path="/posts/:id" component={Post} posts={posts}/>
			<Route path="/contact" component={Contact}/>
		</Route>
		<Route path="/login" component={Login}/>
	</Router>
),document.getElementById('content'))