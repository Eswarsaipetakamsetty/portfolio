import ProjectCard from "../../styles_components/ProjectCard"
import image from '../../assets/image.png'
import './Projects.css'
import ScaleUpText from "../../styles_components/ScaleUpText"

const Projects = () => {
    return (
        <div id="projects">
            < ScaleUpText
                label="Projects"
                textClassName="project-container-title"
            />
            <ProjectCard
                title="Sortminder"
                label="It is an e Learning website, where students can practice datastructures questions
                and aptitude problems. Also the main feature of the application is, we can ask a challenge
                 and it will give a challenge according to the rating of the user"
                imageURL={image}
                tags={["Django", "React", "PostgreSQL", "Redis"]}
                leftToRight={true}
                url="https://github.com/Eswarsaipetakamsetty/Sortminder-backend"
            >
            </ProjectCard>
            <ProjectCard
                title="Feedback Management Tool"
                label="An ERP like tool through which manager can employees can give self feedbacks
                 and manager can approve and gives the score according to their performance."
                imageURL={image}
                tags={["Django", "React", "Docker"]}
                url="https://github.com/Eswarsaipetakamsetty/feedbacksystem"
            >
            </ProjectCard>
        </div>
    )
}

export default Projects