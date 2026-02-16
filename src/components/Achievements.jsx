const achievements = [
    {
        icon: '🎓',
        title: '75% Academic Merit Waiver (Undergrad)',
        description: 'Scholarships from PEC, JSC, SSC (Talentpool), Manarat.',
    },
    {
        icon: '🌏',
        title: 'International Competitor & Finalist',
        description:
            'ARC 2024 (Australia), WRC 2022 (India), URC (Egypt), IRDC (India).',
    },
    {
        icon: '🏆',
        title: 'Technovation 2.0 Champion',
        description: 'Won multiple national-level competitions in technology and innovation.',
    },
]

export default function Achievements() {
    return (
        <section className="section" id="achievements">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Recognition</span>
                    <h2 className="section-title">Achievements</h2>
                </div>
                <div className="achievements-list">
                    {achievements.map((ach, idx) => (
                        <div
                            key={ach.title}
                            className={`glass-card achievement-item reveal reveal-delay-${idx + 1}`}
                        >
                            <div className="achievement-icon">{ach.icon}</div>
                            <div>
                                <h4>{ach.title}</h4>
                                <p>{ach.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
