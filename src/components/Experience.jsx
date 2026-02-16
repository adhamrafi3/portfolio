const experiences = [
    {
        title: 'Teaching Assistant',
        company: 'Dept. of Mathematics and Physics — North South University, Dhaka',
        date: 'Jan 2025 – Present',
        points: [
            'Assisting faculty with course delivery, student queries, and evaluation support.',
            'Contributing to enhancing student understanding in large foundational courses.',
        ],
    },
    {
        title: 'AI Engineer and Researcher',
        company: 'Team Atlas (Robotics)',
        date: '2018 – Present',
        points: [
            'Led AI, CAD design, piloting, and documentation for Mars Rover projects.',
            'Champions nationally; represented Bangladesh in ARC (Australia), URC (Egypt), and IRDC (India).',
        ],
    },
]

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Career Path</span>
                    <h2 className="section-title">Experience</h2>
                </div>
                <div className="timeline">
                    {experiences.map((exp, idx) => (
                        <div key={exp.title} className={`timeline-item reveal reveal-delay-${idx + 1}`}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">{exp.date}</div>
                            <div className="glass-card timeline-content">
                                <h3>{exp.title}</h3>
                                <div className="company">{exp.company}</div>
                                <ul>
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
