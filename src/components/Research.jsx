import { useState } from 'react'

const papers = [
    {
        id: 1,
        status: 'Under Revision',
        statusColor: '#00d4ff',
        journal: 'PLOS ONE',
        quartile: 'Q1',
        title: 'ComfortADHD: A Stacking Ensemble Framework for Early ADHD Prediction Integrating Machine Learning, Explainable AI, LLMs, and Dialogflow-Assisted Virtual Therapy Chatbot',
        authorship: 'First Author',
        contribution: 'Data curation, pipeline, model building, visualization, original draft & writing, conceptualizing, data analysis, explainable AI implementation, chatbot build, and overall engineering.',
        repo: 'https://github.com/adhamrafi3/ComfortADHD',
        abstract: `Attention-Deficit/Hyperactivity Disorder (ADHD) is a complex neurodevelopmental condition that, if undetected in early childhood, may lead to poor self-esteem and social function. This is the first integrated framework that not only predicts ADHD in early childhood using Machine Learning and NLP techniques but also offers a Dialogflow-based therapeutic chatbot as a primary intervention. Utilizing the 2021–2022 NSCH dataset (N = 67,171), we developed a modular pipeline evaluating fourteen ML classifiers and five BERT-based transformer architectures. The Stacking ensemble model achieved 94.27% accuracy, 87.00% precision, 82.07% recall, 84.30% F1-score, and an AUC of 0.97 with a Brier Score of 0.044. DistilBERT surpassed other transformers with 93.45% accuracy and AUC of 0.968. This study is the first to apply LLM-based transformer models to the CAHMI dataset, establishing a new benchmark. SHAP and LIME analysis identified that children with chronic health conditions, anxiety symptoms, and adverse childhood experiences (ACEs) are at substantially higher risk of ADHD diagnosis.`,
        highlights: ['94.27% Accuracy', 'AUC 0.97', 'First LLM on CAHMI Dataset', 'Stacking Ensemble'],
        tags: ['Machine Learning', 'NLP', 'BERT', 'XAI', 'Dialogflow', 'Healthcare'],
        icon: '🧠',
    },
    {
        id: 2,
        status: 'Under Revision',
        statusColor: '#00d4ff',
        journal: 'Ain Shams Engineering Journal',
        quartile: 'Q1',
        title: 'OpenSetWaste: Open-Set Recognition in Waste Management Leveraging Graph Convolutional Networks',
        authorship: 'Second Author',
        contribution: 'Data curation, pipeline, modelling, visualization, original draft & writing, exploratory data analysis, explainable AI.',
        abstract: `This study introduces a novel automatic waste detection and classification framework for Dhaka city. A manually curated dataset "OpenWasteSet" is created with 5,138 high-quality images representing seven waste types. The proposed system combines EfficientGraphNet, a GCN architecture with EfficientNetB3 backbone, and open-set learning (OSL) to detect unseen waste categories — a first in waste management. The OpenMax algorithm and Weibull distribution recalibrate class scores to predict known vs "Unknown" samples. The model achieves 97.73% accuracy on closed-set and 88.58% on open-set, outperforming traditional deep neural networks. Grad-CAM++ explainable AI validates model performance, making it a potential solution for scalable, sustainable urban management.`,
        highlights: ['97.73% Closed-Set Accuracy', '88.58% Open-Set', 'First OSL in Waste Mgmt', 'GCN + EfficientNet'],
        tags: ['GCN', 'Open-Set Learning', 'Computer Vision', 'XAI', 'Urban Sustainability'],
        icon: '♻️',
    },
    {
        id: 3,
        status: 'Initial Submission',
        statusColor: '#7c3aed',
        journal: 'Q1 Journal',
        quartile: 'Q1',
        title: 'Fito: A Data-Driven Approach Unveiling Mental Health Patterns Among Bangladeshi Fitness Enthusiasts via Clustering and Predictive Modeling',
        authorship: 'First Author',
        contribution: 'Data curation, novel dataset setup, first study in Bangladesh, pipeline, model building, visualization, original draft & writing, conceptualizing, data analysis, explainable AI, chatbot build, and overall engineering.',
        repo: 'https://github.com/adhamrafi3/FITO',
        dataForm: 'https://docs.google.com/forms/d/1i1JyKi7qVOx8Yvz0YxuyuQ4Ec3v5OFt7x2rqjPPb2Co/edit?usp=forms_home&ouid=112826610188086511728&ths=true',
        novelBadge: '🇧🇩 First Study in Bangladesh — Novel Dataset Collection via Google Forms',
        abstract: `FITO is the first data-driven framework analyzing mental health trends among Bangladeshi fitness enthusiasts, leveraging ML and LLMs as a pioneering effort in a developing region. The dataset includes 1,940 participants from seven areas of Dhaka. CatBoost classifier achieved 93.82% accuracy and AUC of 0.991, outperforming ClinicalBERT (AUC = 0.87) and TabPFN (accuracy = 0.9346). K-Means (k=3) clustering identified three primary mental health archetypes with a Silhouette Score of 0.39. SHAP and LIME reveal that self-perception, family support, and workout consistency are key predictors of mental well-being. FITO bridges behavioral science and data-driven intelligence for understanding physical exercise–mental health relationships in Bangladesh.`,
        highlights: ['93.82% Accuracy', 'AUC 0.991', 'First Study in Bangladesh', 'Novel Dataset (1,940)'],
        tags: ['CatBoost', 'Clustering', 'Mental Health', 'LLMs', 'XAI', 'Fitness'],
        icon: '💪',
    },
]

export default function Research() {
    const [expandedPaper, setExpandedPaper] = useState(null)

    return (
        <section className="section" id="research">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">📄 Research & Publications</span>
                    <h2 className="section-title">Pushing the Boundaries of AI Research</h2>
                    <p className="section-subtitle">
                        3 papers under review in <strong style={{ color: 'var(--accent-cyan)' }}>Q1 journals</strong> — blending Machine Learning, NLP, and Explainable AI for real-world impact.
                    </p>
                </div>

                {/* Research Stats Banner */}
                <div className="research-stats reveal">
                    <div className="research-stat-item">
                        <span className="research-stat-number">3</span>
                        <span className="research-stat-label">Papers in Q1 Journals</span>
                    </div>
                    <div className="research-stat-divider"></div>
                    <div className="research-stat-item">
                        <span className="research-stat-number">2</span>
                        <span className="research-stat-label">First Author Papers</span>
                    </div>
                    <div className="research-stat-divider"></div>
                    <div className="research-stat-item">
                        <span className="research-stat-number">3</span>
                        <span className="research-stat-label">Novel Contributions</span>
                    </div>
                    <div className="research-stat-divider"></div>
                    <div className="research-stat-item">
                        <span className="research-stat-number">97%</span>
                        <span className="research-stat-label">Best Model Accuracy</span>
                    </div>
                </div>

                {/* Papers */}
                <div className="research-papers">
                    {papers.map((paper, idx) => (
                        <div key={paper.id} className={`research-paper glass-card reveal reveal-delay-${idx + 1}`}>
                            {/* Top accent bar */}
                            <div className="research-paper-accent" style={{ background: `linear-gradient(90deg, ${paper.statusColor}, transparent)` }}></div>

                            <div className="research-paper-header">
                                <div className="research-paper-meta">
                                    <span className="research-paper-status" style={{ color: paper.statusColor, borderColor: paper.statusColor }}>
                                        {paper.status}
                                    </span>
                                    <span className="research-paper-journal">
                                        {paper.journal}
                                        <span className="research-quartile">{paper.quartile}</span>
                                    </span>
                                </div>
                            </div>

                            <h3 className="research-paper-title">{paper.title}</h3>

                            <div className="research-paper-authorship">
                                <span className="research-authorship-badge" style={{
                                    background: paper.authorship === 'First Author' ? 'rgba(0, 212, 255, 0.12)' : 'rgba(124, 58, 237, 0.12)',
                                    color: paper.authorship === 'First Author' ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                                    borderColor: paper.authorship === 'First Author' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(124, 58, 237, 0.3)',
                                }}>
                                    ✦ {paper.authorship}
                                </span>
                            </div>

                            {/* Key Highlights */}
                            <div className="research-highlights">
                                {paper.highlights.map((h) => (
                                    <span key={h} className="research-highlight">{h}</span>
                                ))}
                            </div>

                            {/* Contribution */}
                            <div className="research-contribution">
                                <strong>Contribution:</strong> {paper.contribution}
                            </div>

                            {/* Abstract - Expandable */}
                            <div className="research-abstract-wrapper">
                                <p className={`research-abstract ${expandedPaper === paper.id ? 'expanded' : ''}`}>
                                    <strong>Abstract:</strong> {paper.abstract}
                                </p>
                                <button
                                    className="research-abstract-toggle"
                                    onClick={() => setExpandedPaper(expandedPaper === paper.id ? null : paper.id)}
                                >
                                    {expandedPaper === paper.id ? 'Show Less ↑' : 'Read Abstract ↓'}
                                </button>
                            </div>

                            {/* Tags */}
                            <div className="research-tags">
                                {paper.tags.map((tag) => (
                                    <span key={tag} className="research-tag">{tag}</span>
                                ))}
                            </div>

                            {/* Repo link + Data form */}
                            <div className="research-links">
                                {paper.repo && (
                                    <a href={paper.repo} target="_blank" rel="noopener noreferrer" className="research-repo-link">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                        View Repository
                                    </a>
                                )}
                                {paper.dataForm && (
                                    <a href={paper.dataForm} target="_blank" rel="noopener noreferrer" className="research-repo-link research-data-link">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                        Data Collection Form
                                    </a>
                                )}
                            </div>
                            {paper.novelBadge && (
                                <div className="research-novel-badge">
                                    {paper.novelBadge}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
