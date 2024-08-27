import './project-list.css';

const ProjectList = (props) => {
	const {projects} = props;

	const allPhotos = projects.map((image, i) => {
		return <img className="photo" src={image.img}  key={i} alt=""/>
	})

	return (
		<div className="image-gallery">
			{allPhotos}
		</div>
	)
}

export default ProjectList;