export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">Passionate About Intelligent Systems</h2>
                </div>
                <div className="about-grid">
                    <div className="about-image-container reveal">
                        <div className="about-image-decoration"></div>
                        <img
                            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&q=80"
                            alt="Coding workspace"
                            className="about-image"
                        />
                    </div>
                    <div className="about-text reveal reveal-delay-2">
                        <h3>Building the Future with AI & Code</h3>
                        <p>
                            I'm a Machine Learning Engineer, AI Researcher, and a proud graduate of
                            North South University with a B.Sc. in Computer Science & Engineering
                            (AI & Computing), achieving a CGPA of 3.76 alongside a 75% academic merit waiver.
                            I aspire to pursue a Master's in AI & Data Science to deepen my expertise,
                            gain global knowledge, and contribute meaningfully to the AI field both at home and worldwide.
                        </p>
                        <p>
                            From representing Bangladesh at the Australian Rover Challenge to publishing
                            3 research papers in Q1 journals, I thrive at the intersection of research and
                            real-world problem solving. I'm a big ML & AI enthusiast with deep hands-on experience
                            in NLP, Computer Vision, Explainable AI, and end-to-end pipeline engineering.
                            Currently available for full-time and remote opportunities.
                        </p>
                        <div className="about-highlights">
                            <div className="about-highlight">
                                <span className="icon">🎓</span>
                                BSc CSE Graduate (AI & Computing)
                            </div>
                            <div className="about-highlight">
                                <span className="icon">🎯</span>
                                Aspiring for Master's in AI & DS
                            </div>
                            <div className="about-highlight">
                                <span className="icon">🌏</span>
                                International Competitor
                            </div>
                            <div className="about-highlight">
                                <span className="icon">💼</span>
                                Open to Full-Time & Remote
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
