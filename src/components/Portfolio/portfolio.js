import {Component} from 'react';

import photos from '../photoDB/photoDB';
import Toolbar from '../toolbar/toolbar';
import ProjectList from '../project-list/project-list';
import './portfolio.css';

class Portfolio extends Component {	
	constructor(props) {
		super(props);
	
		this.state = {
			data: photos,
			filters: 'all',
		}
	}

	filterPhoto = (items, filter) => {
		switch (filter) {
			case 'websites':
				return items.filter(item => item.category === 'Websites');
			case 'flayers':
				return items.filter(item => item.category === 'Flayers');
			case 'business':
				return items.filter(item => item.category === 'Business Cards');
			default:
				return items
		}
	}

	onSelectFilter = (filters) => {
		this.setState({filters: filters})
	}

	render() {
		const{data, filters} = this.state;
		const visiblePhoto = this.filterPhoto(data, filters);

		return (
			<div className="portfolio">
				<Toolbar selected={filters} onSelectFilter={this.onSelectFilter}/>
				<ProjectList projects={visiblePhoto}/>
			</div>
		)
	}
}

export default Portfolio;