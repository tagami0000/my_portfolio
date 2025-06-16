import './App.css'
import profileImage from '/image.png'

function App() {
    const projects = [
        {
            title: "Project 1",
            description: "プロジェクト1の説明文をここに記載します。",
            githubUrl: "https://github.com/yourusername/project1",
            technologies: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "Project 2",
            description: "プロジェクト2の説明文をここに記載します。",
            githubUrl: "https://github.com/yourusername/project2",
            technologies: ["Python", "Django", "PostgreSQL"]
        },
        // 必要に応じてプロジェクトを追加できます
    ]

    return (
        <div className="portfolio-container">

            <section className="about-section">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="about-image"
                />
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>
                        ここにあなたの自己紹介文を入れてください。
                        スキルや経験、興味のある分野などを記載すると良いでしょう。
                    </p>
                </div>
            </section>

            <section className="projects-section">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="technologies">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default App
