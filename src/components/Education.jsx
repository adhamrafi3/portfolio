const education = [
    {
        degree: 'Bachelor of Science in Computer Science and Engineering',
        specialization: 'Artificial Intelligence & Computing',
        institution: 'North South University, Dhaka',
        year: '2021 – 2025',
        gpa: 'CGPA: 3.76',
    },
    {
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'Dhaka College, Dhaka',
        year: '2020',
        gpa: 'GPA: 5.00',
    },
    {
        degree: 'Secondary School Certificate (SSC)',
        institution: 'Ideal School and College, Dhaka',
        year: '2018',
        gpa: 'GPA: 5.00',
    },
]

export default function Education() {
    return (
        <section className="section" id="education">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Academic Background</span>
                    <h2 className="section-title">Education</h2>
                </div>
                <div className="education-grid">
                    {education.map((edu, idx) => (
                        <div
                            key={edu.degree}
                            className={`glass-card education-card reveal reveal-delay-${idx + 1}`}
                        >
                            <div className="year">{edu.year}</div>
                            <h3>{edu.degree}</h3>
                            {edu.specialization && (
                                <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: 6 }}>
                                    {edu.specialization}
                                </div>
                            )}
                            <div className="institution">{edu.institution}</div>
                            <div className="gpa">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                {edu.gpa}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
