const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)
class Content extends React.Component{
	render(){
		return (
			<div>
				<EnhancedButton/>
				<br/>
				<EnhancedLink/>
				<br/>
				<EnhancedLogo/>
				<br/>
				<iframe id="frame" src="" width="600" height="500"/>
			</div>
		)
	}
}