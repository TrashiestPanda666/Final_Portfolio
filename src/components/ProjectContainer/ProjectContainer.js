import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (

  <div className='project'>
    <h3>{project.name}</h3>

    <img src= {process.env.PUBLIC_URL + project.image} alt='bruh'/>

    <p className='project__description'>{project.description}</p>

    <a href={project.link} rel = "noreferrer" target="_blank">Link to Project</a>
  </div>
)

export default ProjectContainer
