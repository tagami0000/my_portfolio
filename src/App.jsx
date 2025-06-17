import './App.css'
import profileImage from '/image.png'

function App() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "モダンなReactとNode.jsを使用したフルスタックのECサイト。ユーザー認証、決済システム、管理画面を実装。",
            githubUrl: "https://github.com/yourusername/ecommerce-platform",
            demoUrl: "https://demo-ecommerce.com",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
            icon: "🛒"
        },
        {
            title: "Task Management App",
            description: "チーム向けのタスク管理アプリケーション。リアルタイム同期、ドラッグ&ドロップ、通知機能を搭載。",
            githubUrl: "https://github.com/yourusername/task-manager",
            demoUrl: "https://demo-taskmanager.com",
            technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
            icon: "📋"
        },
        {
            title: "Weather Dashboard",
            description: "美しいUIを持つ天気予報ダッシュボード。複数都市の天気情報、グラフ表示、位置情報連携。",
            githubUrl: "https://github.com/yourusername/weather-dashboard",
            demoUrl: "https://demo-weather.com",
            technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
            icon: "🌤️"
        },
        {
            title: "Portfolio Website",
            description: "レスポンシブデザインのポートフォリオサイト。アニメーション、ダークモード、SEO最適化済み。",
            githubUrl: "https://github.com/yourusername/portfolio",
            demoUrl: "https://yourportfolio.com",
            technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
            icon: "💼"
        }
    ]

    const skills = [
        "React", "Vue.js", "Node.js", "Python", "TypeScript", "MongoDB", 
        "PostgreSQL", "AWS", "Docker", "Git", "Figma", "Next.js"
    ]

    return (
        <div className="portfolio-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Creative Developer</h1>
                    <p className="hero-subtitle">フロントエンド・フルスタック開発者</p>
                    <p className="hero-description">
                        美しいユーザーインターフェースと優れたユーザーエクスペリエンスを提供する
                        Webアプリケーションの開発に情熱を注いでいます。
                        モダンな技術スタックを使用して、革新的なソリューションを創造します。
                    </p>
                    <a href="#projects" className="cta-button">
                        作品を見る
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section" id="about">
                <div className="section-container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>About Me</h2>
                            <p>
                                こんにちは！私は情熱的なWeb開発者として、
                                ユーザー中心のデジタル体験を創造することに専念しています。
                            </p>
                            <p>
                                フロントエンドからバックエンドまで幅広い技術スタックを駆使し、
                                スケーラブルで保守性の高いアプリケーションを構築します。
                                常に新しい技術を学び、最新のベストプラクティスを実践しています。
                            </p>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="about-image-container">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="about-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section" id="projects">
                <div className="section-container">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-image">
                                    <span>{project.icon}</span>
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="technologies">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <span>GitHub</span>
                                        </a>
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section" id="contact">
                <div className="section-container">
                    <div className="contact-content">
                        <h2>Let's Work Together</h2>
                        <p>
                            新しいプロジェクトやコラボレーションの機会について
                            お気軽にお声がけください。一緒に素晴らしいものを作りましょう！
                        </p>
                        <div className="contact-links">
                            <a href="mailto:your.email@example.com" className="contact-link">
                                <span>📧</span>
                                <span>Email</span>
                            </a>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span>💻</span>
                                <span>GitHub</span>
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span>💼</span>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span>🐦</span>
                                <span>Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App