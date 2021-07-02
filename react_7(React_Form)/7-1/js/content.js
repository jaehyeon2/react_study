class Content extends React.Component {
	constructor(props) {
		super(props);
		this.handleRadio = this.handleRadio.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			description: `With the right pattern, applications will be more scalable and easier to maintain.
If you aspire one day to become a Node.js architect (or maybe you're already one and want to extend your knowledge), this presentation is for you.`,
			radioGroup: {
				angular: false,
				react: true,
				polymer: false
			},
			checkboxGroup: {
				node: false,
				react: true,
				express: false,
				mongodb: false
			},
			selectedValue: 'node'
		};
	}
	handleRadio(event) {
		let obj = {}; //erase other radios
		obj[event.target.value] = event.target.checked; //true
		this.setState({ radioGroup: obj });
	}
	handleCheckbox(event) {
		let obj = Object.assign(this.state.checkboxGroup);
		obj[event.target.value] = event.target.checked;
		this.setState({ checkboxGroup: obj });
	}
	handleSelectChange(event) {
		this.setState({ selectedValue: event.target.value });
		console.log(event.target.value, event.target.selected);
	}
	handleChange(event) {
		this.setState({ emailValue: event.target.value });
	}
	handleFirstNameChange(event) {
		this.setState({ firstName: event.target.value });
	}
	handleSubmit() {
		fetch(this.props['data-url'], { method: 'POST', body: JSON.stringify(this.state) }).then(response => {
			return response.json();
		}).then(data => {
			console.log('Submitted: ', data);
		});
	}

	render() {
		return React.createElement(
			'form',
			null,
			React.createElement(
				'div',
				{ id: 'firstname-container' },
				React.createElement(
					'label',
					null,
					'fisrstname',
					React.createElement('br', null),
					React.createElement('input', { name: 'firstName',
						onChange: this.handleFirstNameChange,
						type: 'text' })
				)
			),
			React.createElement('hr', null),
			React.createElement(
				'div',
				{ id: 'radio-container' },
				React.createElement(
					'label',
					null,
					React.createElement('input', {
						type: 'radio',
						name: 'radioGroup',
						value: 'angular',
						checked: this.state.radioGroup['angular'],
						onChange: this.handleRadio }),
					'Angular'
				),
				React.createElement('br', null),
				React.createElement(
					'label',
					null,
					React.createElement('input', {
						type: 'radio',
						name: 'radioGroup',
						value: 'react',
						checked: this.state.radioGroup['react'],
						onChange: this.handleRadio }),
					'React'
				),
				React.createElement('br', null),
				React.createElement(
					'label',
					null,
					React.createElement('input', {
						type: 'radio',
						name: 'radioGroup',
						value: 'polymer',
						checked: this.state.radioGroup['polymer'],
						onChange: this.handleRadio }),
					'Polymer'
				)
			),
			React.createElement('hr', null),
			React.createElement(
				'div',
				{ id: 'checkbox-container' },
				React.createElement(
					'label',
					null,
					React.createElement('input', {
						type: 'checkbox',
						name: 'checkboxGroup',
						value: 'node',
						checked: this.state.checkboxGroup['node'],
						onChange: this.handleCheckbox }),
					'Node'
				),
				React.createElement('br', null),
				React.createElement(
					'label',
					null,
					React.createElement('input', {
						type: 'checkbox',
						name: 'checkboxGroup',
						value: 'react',
						checked: this.state.checkboxGroup['react'],
						onChange: this.handleCheckbox }),
					'React'
				),
				React.createElement('br', null),
				React.createElement(
					'label',
					null,
					React.createElement('input', {
						type: 'checkbox',
						name: 'checkboxGroup',
						value: 'express',
						checked: this.state.checkboxGroup['express'],
						onChange: this.handleCheckbox }),
					'Express'
				),
				React.createElement('br', null),
				React.createElement(
					'label',
					null,
					React.createElement('input', {
						type: 'checkbox',
						name: 'checkboxGroup',
						value: 'mongodb',
						checked: this.state.checkboxGroup['mongodb'],
						onChange: this.handleCheckbox }),
					'MongoDB'
				)
			),
			React.createElement('hr', null),
			React.createElement(
				'div',
				{ id: 'textarea-container' },
				React.createElement('textarea', {
					name: 'description',
					defaultValue: this.state.description,
					onChange: this.handleChange }),
				React.createElement('hr', null),
				React.createElement('textarea', {
					name: 'description1',
					defaultValue: "Pro Express.js is for the reader\nwho wants to quickly get up-to-speed with Express.js, \nthe flexible Node.js framework",
					onChange: this.handleChange })
			),
			React.createElement('hr', null),
			React.createElement(
				'div',
				{ id: 'select-container' },
				React.createElement(
					'select',
					{
						value: this.state.selectedValue,
						onChange: this.handleSelectChange },
					React.createElement(
						'option',
						{ value: 'ruby' },
						'Ruby'
					),
					React.createElement(
						'option',
						{ value: 'node' },
						'Node'
					),
					React.createElement(
						'option',
						{ value: 'python' },
						'Python'
					)
				),
				React.createElement('hr', null),
				React.createElement(
					'select',
					{ multiple: true, value: ['meteor', 'react'] },
					React.createElement(
						'option',
						{ value: 'meteor' },
						'Meteor'
					),
					React.createElement(
						'option',
						{ value: 'react' },
						'React'
					),
					React.createElement(
						'option',
						{ value: 'jQuery' },
						'jQuery'
					)
				)
			),
			React.createElement('hr', null),
			React.createElement(
				'div',
				{ id: 'input-container' },
				React.createElement('input', {
					type: 'text',
					onChange: this.handleChange,
					defaultValue: 'wol5971@gmail.com' })
			),
			React.createElement('hr', null),
			React.createElement('input', {
				type: 'button',
				onClick: this.handleSubmit,
				value: 'submit' })
		);
	}
}