const cocurricular = [
    {
        category: 'International Robotics Competitions',
        icon: '🌍',
        items: [
            {
                title: 'Australian Rover Challenge (ARC) 2024',
                location: 'Adelaide, Australia',
                role: 'Team Lead — AI & Design',
                description: 'Finalist team representing Bangladesh. Led AI development, 3D CAD design, piloting, and documentation for Mars Rover.',
                tags: ['International', 'Finalist', 'Mars Rover'],
            },
            {
                title: 'World Robotics Championship (WRC) 2022',
                location: 'New Delhi, India',
                role: 'Robotics Engineer',
                description: 'Represented Bangladesh in Robo-Race and Line Follower categories. Achieved 2nd place nationally.',
                tags: ['International', '2nd Place National'],
            },
            {
                title: 'University Rover Challenge (URC)',
                location: 'Cairo, Egypt',
                role: 'AI Engineer & Researcher',
                description: 'International Mars Rover competition. Contributed to autonomous navigation and AI systems.',
                tags: ['International', 'Mars Rover'],
            },
            {
                title: 'International Robotics Design Competition (IRDC)',
                location: 'India',
                role: 'Design & Documentation Lead',
                description: 'Represented Bangladesh at the international level in robotics design and innovation.',
                tags: ['International', 'Design'],
            },
        ],
    },
    {
        category: 'National Competitions & Hackathons',
        icon: '🏆',
        items: [
            {
                title: 'Technovation 2.0',
                location: 'Bangladesh',
                role: 'Team Lead',
                description: 'Champions of this national-level technology innovation competition.',
                tags: ['Champion', 'National'],
            },
            {
                title: 'Multiple National Robotics Events',
                location: 'Bangladesh',
                role: 'Competitor & Winner',
                description: 'Consistently placed in multiple national-level robotics and technology competitions.',
                tags: ['Winner', 'National'],
            },
        ],
    },
    {
        category: 'Academic & Leadership',
        icon: '📚',
        items: [
            {
                title: 'Teaching Assistant — NSU',
                location: 'North South University',
                role: 'Dept. of Mathematics and Physics',
                description: 'Assisting in course delivery, mentoring students, and supporting foundational academic courses.',
                tags: ['Teaching', 'Leadership'],
            },
            {
                title: 'Academic Merit Scholar',
                location: 'North South University',
                role: '75% Merit Waiver Recipient',
                description: 'Received merit-based scholarships: PEC, JSC, SSC (Talentpool), Manarat.',
                tags: ['Scholarship', 'Merit'],
            },
        ],
    },
]

export default function CoCurricular() {
    return (
        <section className="section" id="cocurricular">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Beyond Academics</span>
                    <h2 className="section-title">Co-Curricular Activities</h2>
                    <p className="section-subtitle">
                        Competitions, leadership, and experiences that shaped my journey.
                    </p>
                </div>
                <div className="cocurricular-grid">
                    {cocurricular.map((group, gIdx) => (
                        <div key={group.category} className={`cocurricular-group reveal reveal-delay-${gIdx + 1}`}>
                            <h3 className="cocurricular-group-title">
                                <span className="cocurricular-group-icon">{group.icon}</span>
                                {group.category}
                            </h3>
                            <div className="cocurricular-items">
                                {group.items.map((item, iIdx) => (
                                    <div key={item.title} className="glass-card cocurricular-card">
                                        <div className="cocurricular-card-header">
                                            <h4>{item.title}</h4>
                                            <span className="cocurricular-location">{item.location}</span>
                                        </div>
                                        <div className="cocurricular-role">{item.role}</div>
                                        <p>{item.description}</p>
                                        <div className="cocurricular-tags">
                                            {item.tags.map((tag) => (
                                                <span key={tag} className="cocurricular-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
