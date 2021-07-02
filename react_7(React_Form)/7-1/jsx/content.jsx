class Content extends React.Component{
	constructor(props){
		super(props)
		this.handleRadio=this.handleRadio.bind(this)
		this.handleCheckbox=this.handleCheckbox.bind(this)
		this.handleSelectChange = this.handleSelectChange.bind(this)
		this.handleChange=this.handleChange.bind(this)
		this.handleFirstNameChange=this.handleFirstNameChange.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
		
		this.state={
			description: `With the right pattern, applications will be more scalable and easier to maintain.
If you aspire one day to become a Node.js architect (or maybe you're already one and want to extend your knowledge), this presentation is for you.`,
			radioGroup:{
				angular:false,
				react:true,
				polymer:false
			},
			checkboxGroup:{
				node:false,
				react:true,
				express:false,
				mongodb:false
			},
			selectedValue: 'node'
		}
	}
	handleRadio(event){
		let obj={}//erase other radios
		obj[event.target.value]=event.target.checked//true
		this.setState({radioGroup:obj})
	}
	handleCheckbox(event){
		let obj=Object.assign(this.state.checkboxGroup)
		obj[event.target.value]=event.target.checked
		this.setState({checkboxGroup:obj})
	}
	handleSelectChange(event){
		this.setState({selectedValue:event.target.value})
		console.log(event.target.value, event.target.selected)
	}
	handleChange(event){
		this.setState({emailValue:event.target.value})
	}
	handleFirstNameChange(event){
		this.setState({firstName:event.target.value})
	}
	handleSubmit(){
		fetch(this.props['data-url'], {method:'POST', body:JSON.stringify(this.state)})
		.then((response)=>{return response.json()})
		.then((data)=>{console.log('Submitted: ', data)})
	}
	
	render(){
		return(
			<form>
				<div id="firstname-container">
					<label>
						fisrstname<br/>
						<input name="firstName"
							onChange={this.handleFirstNameChange}
							type="text"/>
					</label>
				</div>
				<hr/>
				<div id="radio-container">
					<label>
						<input
							type="radio"
							name="radioGroup"
							value='angular'
							checked={this.state.radioGroup['angular']}
							onChange={this.handleRadio}/>
						Angular
					</label>
					<br/>
					<label>
						<input
							type="radio"
							name="radioGroup"
							value='react'
							checked={this.state.radioGroup['react']}
							onChange={this.handleRadio}/>
						React
					</label>
					<br/>
					<label>
						<input
							type="radio"
							name="radioGroup"
							value='polymer'
							checked={this.state.radioGroup['polymer']}
							onChange={this.handleRadio}/>
						Polymer
					</label>
				</div>
				<hr/>
				<div id="checkbox-container">
					<label>
						<input
							type="checkbox"
							name="checkboxGroup"
							value='node'
							checked={this.state.checkboxGroup['node']}
							onChange={this.handleCheckbox}/>
						Node
					</label>
					<br/>
					<label>
						<input
							type="checkbox"
							name="checkboxGroup"
							value='react'
							checked={this.state.checkboxGroup['react']}
							onChange={this.handleCheckbox}/>
						React
					</label>
					<br/>
					<label>
						<input
							type="checkbox"
							name="checkboxGroup"
							value='express'
							checked={this.state.checkboxGroup['express']}
							onChange={this.handleCheckbox}/>
						Express
					</label>
					<br/>
					<label>
						<input
							type="checkbox"
							name="checkboxGroup"
							value='mongodb'
							checked={this.state.checkboxGroup['mongodb']}
							onChange={this.handleCheckbox}/>
						MongoDB
					</label>
				</div>
				<hr/>
				<div id="textarea-container">
					<textarea
						name="description"
						defaultValue={this.state.description}
						onChange={this.handleChange}/>
					<hr/>
					<textarea
						name="description1"
						defaultValue={"Pro Express.js is for the reader\nwho wants to quickly get up-to-speed with Express.js, \nthe flexible Node.js framework"}
						onChange={this.handleChange}/>
				</div>
				<hr/>
				<div id="select-container">
					<select
						value={this.state.selectedValue}
						onChange={this.handleSelectChange}>
						<option value="ruby">Ruby</option>
						<option value="node">Node</option>
						<option value="python">Python</option>
					</select>
					<hr/>
					<select multiple={true} value={['meteor', 'react']}>
						<option value="meteor">Meteor</option>
						<option value="react">React</option>
						<option value="jQuery">jQuery</option>
					</select>
		{/*multiple={true}는 다중 선택 요소를 렌더링하고, 값이 미리 선택되어 있다.*/}
				</div>
				<hr/>
				<div id="input-container">
					<input
						type="text"
						onChange={this.handleChange}
						defaultValue="wol5971@gmail.com"/>
				</div>
				<hr/>
				<input
					type="button"
					onClick={this.handleSubmit}
					value="submit"/>
			</form>
		)
	}
}