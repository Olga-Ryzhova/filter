import './toolbar.css';

const Toolbar = (props) => {
	const allButtons = [
		{name: 'all', label: 'All'},
		{name: 'websites', label: 'Websites'},
		{name: 'flayers', label: 'Flayers'},
		{name: 'business', label: 'Business Cards'},
	];

	const buttons = allButtons.map(({name, label}) => {
		const classActive = props.filters === name;
		
		return (
			<button className={`btn ${classActive}`}
					type="button"
					key={name}
					onClick={() => props.onSelectFilter(name)}>
					{label}
			</button>
		)
	});

	return (
		<div className="btn-group">
			{buttons}
		</div>
	)
}

export default Toolbar;
