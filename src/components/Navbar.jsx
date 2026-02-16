import { useState, useEffect } from 'react'

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Experience', href: '#experience' },
    { label: 'Resume', href: '#resume' },
    { label: 'Activities', href: '#cocurricular' },
    { label: 'Explorations', href: '#explorations' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            const sections = navItems.map((item) => item.href.slice(1))
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(sections[i])
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (e, href) => {
        e.preventDefault()
        setMobileOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                    {'<AW />'}
                </a>
                <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={activeSection === item.href.slice(1) ? 'active' : ''}
                                onClick={(e) => handleClick(e, item.href)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}
