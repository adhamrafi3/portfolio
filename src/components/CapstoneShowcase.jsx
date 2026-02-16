import { useState } from 'react'
import posterImg from '../assets/gallery/capstone-3.jpg'
import teamImg1 from '../assets/gallery/capstone-1.jpg'
import teamImg2 from '../assets/gallery/capstone-2.jpg'

export default function CapstoneShowcase() {
    const [lightbox, setLightbox] = useState(false)

    return (
        <section className="section" id="capstone">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Capstone Highlight</span>
                    <h2 className="section-title">AI-Driven ADHD Prediction & Analysis</h2>
                    <p className="section-subtitle">
                        My capstone project — integrating Machine Learning, Explainable AI, LLMs, and a Dialogflow-powered
                        virtual therapist chatbot for early ADHD detection and support.
                    </p>
                </div>

                <div className="capstone-content reveal">
                    {/* Poster */}
                    <div className="capstone-poster" onClick={() => setLightbox(true)}>
                        <img src={posterImg} alt="ComfortADHD Capstone Poster — AI-Driven ADHD Prediction and Analysis at Early Age" />
                        <div className="capstone-poster-overlay">
                            <span>Click to view full poster</span>
                        </div>
                    </div>

                    {/* Info Card */}
                    <div className="capstone-info glass-card">
                        <div className="capstone-badge">🏆 Capstone Project — NSU 2025</div>
                        <h3 className="capstone-paper-title">
                            ComfortADHD: A Stacking Ensemble Framework for Early ADHD Prediction
                        </h3>
                        <p className="capstone-desc">
                            A novel approach integrating Machine Learning, Explainable AI, LLMs, and Dialogflow
                            with a virtual therapist chatbot (ComfortChat) — built on the CAHMI & Johns Hopkins dataset.
                        </p>

                        <div className="capstone-metrics">
                            <div className="capstone-metric">
                                <span className="metric-value">94.27%</span>
                                <span className="metric-label">Accuracy</span>
                            </div>
                            <div className="capstone-metric">
                                <span className="metric-value">0.97</span>
                                <span className="metric-label">AUC Score</span>
                            </div>
                            <div className="capstone-metric">
                                <span className="metric-value">Q1</span>
                                <span className="metric-label">Journal (PLOS ONE)</span>
                            </div>
                        </div>

                        <div className="capstone-tags">
                            <span>Machine Learning</span>
                            <span>Explainable AI</span>
                            <span>LLMs</span>
                            <span>NLP</span>
                            <span>Dialogflow</span>
                            <span>SHAP</span>
                            <span>LIME</span>
                            <span>Virtual Therapy</span>
                        </div>

                        <div className="capstone-role">
                            <strong>Role:</strong> First Author — Data pipelines, model architecture, and chatbot development
                        </div>

                        <div className="capstone-team-photos">
                            <img src={teamImg1} alt="Team presenting at Capstone showcase" />
                            <img src={teamImg2} alt="Team with the research poster" />
                        </div>
                    </div>
                </div>

                {/* Lightbox */}
                {lightbox && (
                    <div className="gallery-lightbox" onClick={() => setLightbox(false)}>
                        <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <button className="gallery-lightbox-close" onClick={() => setLightbox(false)}>×</button>
                            <img src={posterImg} alt="ComfortADHD Capstone Poster" />
                            <p className="gallery-lightbox-caption">
                                AI-Driven ADHD Prediction and Analysis at Early Age — Capstone Research Poster
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
