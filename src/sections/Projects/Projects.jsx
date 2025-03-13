import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/snake-logo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://elaborate-gingersnap-92a5cd.netlify.app/"
          h3="Snake"
          p="Snake in your browser!"
        />
      </div>
    </section>
  );
}

export default Projects;
