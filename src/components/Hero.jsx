import { useState, useEffect, useRef } from 'react'
import ParticleCanvas from './ParticleCanvas'
import profileImg from '../assets/profile.jpg'

const roles = [
    'Machine Learning Engineer',
    'AI Researcher',
    'Robotics Enthusiast',
    'Full Stack Developer',
]

export default function Hero() {
    const [text, setText] = useState('')
    const [roleIndex, setRoleIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const current = roles[roleIndex]
        const speed = isDeleting ? 40 : 80

        if (!isDeleting && charIndex === current.length) {
            setTimeout(() => setIsDeleting(true), 2000)
            return
        }
        if (isDeleting && charIndex === 0) {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
            return
        }

        const timeout = setTimeout(() => {
            setText(current.substring(0, charIndex + (isDeleting ? -1 : 1)))
            setCharIndex((prev) => prev + (isDeleting ? -1 : 1))
        }, speed)

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, roleIndex])

    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
            </div>
            <ParticleCanvas />
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="dot"></span>
                        Available for Full-Time & Remote Opportunities
                    </div>
                    <h1 className="hero-name">
                        Hi, I'm <br />
                        <span className="gradient-text">Md. Adham Wahid</span>
                    </h1>
                    <div className="hero-typing">
                        {text}
                        <span className="cursor"></span>
                    </div>
                    <p className="hero-description">
                        ML & AI enthusiast passionate about building intelligent systems that bridge research
                        and real-world impact. B.Sc. in CSE (AI & Computing) graduate from North South University,
                        aspiring to pursue a Master's in AI & Data Science. Eager to gain global knowledge and
                        contribute meaningfully to the AI field both at home and worldwide.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            Get in Touch
                        </a>
                        <a href="#projects" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }) }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                            View Projects
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <h3>7+</h3>
                            <p>Projects Built</p>
                        </div>
                        <div className="hero-stat">
                            <h3>3+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="hero-stat">
                            <h3>5+</h3>
                            <p>Competitions</p>
                        </div>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-glow"></div>
                    <img src={profileImg} alt="Md. Adham Wahid at Australian Rover Challenge" className="hero-image" />
                </div>
            </div>
        </section>
    )
}
