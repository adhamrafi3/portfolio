import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Dynamically import all images from the explorations folder
const images = import.meta.glob('../assets/explorations/*.{png,jpg,jpeg,jfif,svg}', { eager: true, as: 'url' })

const imageList = Object.entries(images).map(([path, mod]) => {
    const src = typeof mod === 'string' ? mod : mod.default
    const name = path.split('/').pop().toLowerCase()

    let title = 'Travel Memories'
    let location = 'Around the World'
    let country = 'Other'
    let flag = '🌍'

    if (name.includes('adelaide')) {
        title = name.includes('oval') ? 'Adelaide Oval' : 'Adelaide'
        location = 'South Australia'
        country = 'Australia'
        flag = ''
    } else if (name.includes('melbourne')) {
        title = 'Melbourne'
        location = 'Victoria, Australia'
        country = 'Australia'
        flag = ''
    } else if (name.includes('england')) {
        title = 'England'
        location = 'United Kingdom'
        country = 'England'
        flag = ''
    } else if (name.includes('france') || name.includes('louve') || name.includes('louvre')) {
        title = name.includes('louve') || name.includes('louvre') ? 'The Louvre' : 'France'
        location = 'Paris, France'
        country = 'France'
        flag = ''
    } else if (name.includes('india') || name.includes('delhi')) {
        title = 'India Gate'
        location = 'New Delhi'
        country = 'India'
        flag = ''
    } else if (name.includes('nepal') || name.includes('thamel') || name.includes('pokhara')) {
        title = name.includes('thamel') ? 'Thamel' : 'Pokhara'
        location = name.includes('thamel') ? 'Kathmandu, Nepal' : 'Nepal'
        country = 'Nepal'
        flag = ''
    }

    return { id: path, src, title, location, country, flag }
})

// Unique countries visited
const countriesVisited = [...new Set(imageList.map(a => a.country))]

const countryColors = {
    Australia: { bg: 'rgba(0, 123, 255, 0.15)', border: 'rgba(0, 123, 255, 0.4)', text: '#60a5fa' },
    England: { bg: 'rgba(220, 38, 38, 0.15)', border: 'rgba(220, 38, 38, 0.4)', text: '#f87171' },
    France: { bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(99, 102, 241, 0.4)', text: '#a5b4fc' },
    India: { bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.4)', text: '#fbbf24' },
    Nepal: { bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.4)', text: '#34d399' },
}

export default function Explorations() {
    const [current, setCurrent] = useState(0)
    const [lightbox, setLightbox] = useState(null)
    const [direction, setDirection] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const timerRef = useRef(null)
    const total = imageList.length

    const go = useCallback((dir) => {
        setDirection(dir)
        setCurrent((prev) => (prev + dir + total) % total)
    }, [total])

    useEffect(() => {
        if (!autoplay || lightbox) return
        timerRef.current = setInterval(() => go(1), 3500)
        return () => clearInterval(timerRef.current)
    }, [autoplay, go, lightbox])

    const pause = () => setAutoplay(false)
    const resume = () => setAutoplay(true)

    useEffect(() => {
        const handleKey = (e) => {
            if (lightbox) {
                if (e.key === 'Escape') setLightbox(null)
                if (e.key === 'ArrowRight') go(1)
                if (e.key === 'ArrowLeft') go(-1)
                return
            }
            if (e.key === 'ArrowRight') go(1)
            if (e.key === 'ArrowLeft') go(-1)
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [lightbox, go])

    useEffect(() => {
        if (lightbox) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = ''
        return () => { document.body.style.overflow = '' }
    }, [lightbox])

    if (total === 0) return null

    const getOffset = (index) => {
        let diff = index - current
        if (diff > total / 2) diff -= total
        if (diff < -total / 2) diff += total
        return diff
    }

    return (
        <section className="section explorations-section" id="explorations">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">🌏 Wanderlust</span>
                    <h2 className="section-title">Explorations</h2>
                    <p className="section-subtitle">
                        I love exploring different cultures and immersing myself in new places around the world.
                        Every journey broadens my perspective and every destination tells a unique story.
                    </p>
                </div>

                {/* Countries Visited Highlight */}
                <div className="countries-highlight reveal">
                    <span className="countries-label">Countries I've Visited</span>
                    <div className="countries-list">
                        {countriesVisited.map((country, i) => {
                            const colors = countryColors[country] || { bg: 'rgba(255,255,255,0.1)', border: 'rgba(255,255,255,0.2)', text: '#fff' }
                            const item = imageList.find(a => a.country === country)
                            return (
                                <motion.div
                                    key={country}
                                    className="country-chip"
                                    style={{
                                        background: colors.bg,
                                        borderColor: colors.border,
                                        color: colors.text,
                                    }}
                                    initial={{ opacity: 0, scale: 0.7, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                                    whileHover={{ scale: 1.1, y: -4 }}
                                >
                                    {item?.flag && <span className="country-chip-flag">{item.flag}</span>}
                                    <span className="country-chip-name">{country}</span>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Carousel */}
                <div className="explore-carousel" onMouseEnter={pause} onMouseLeave={resume}>
                    <div className="explore-carousel-track">
                        {imageList.map((item, i) => {
                            const offset = getOffset(i)
                            const isCenter = offset === 0
                            const isVisible = Math.abs(offset) <= 2

                            if (!isVisible) return null

                            const xPos = offset * 220
                            const scale = isCenter ? 1 : Math.abs(offset) === 1 ? 0.82 : 0.65
                            const zIdx = isCenter ? 10 : Math.abs(offset) === 1 ? 5 : 1
                            const opacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.6 : 0.3
                            const rotateY = offset * -8

                            return (
                                <motion.div
                                    key={item.id}
                                    className={`explore-card${isCenter ? ' center' : ''}`}
                                    animate={{ x: xPos, scale, opacity, rotateY, zIndex: zIdx }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 24 }}
                                    onClick={() => isCenter ? setLightbox(item) : go(offset > 0 ? 1 : -1)}
                                    style={{ position: 'absolute', zIndex: zIdx }}
                                >
                                    <img src={item.src} alt={item.title} className="explore-card-img" draggable={false} />
                                    {isCenter && (
                                        <motion.div
                                            className="explore-card-caption"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.15 }}
                                        >
                                            {item.flag && <span className="explore-card-flag">{item.flag}</span>}
                                            <div>
                                                <h3 className="explore-card-title">{item.title}</h3>
                                                <span className="explore-card-loc">{item.location}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            )
                        })}
                    </div>

                    <button className="explore-nav explore-prev" onClick={() => go(-1)} aria-label="Previous">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button className="explore-nav explore-next" onClick={() => go(1)} aria-label="Next">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>

                    <div className="explore-dots">
                        {imageList.map((_, i) => (
                            <button
                                key={i}
                                className={`explore-dot${i === current ? ' active' : ''}`}
                                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                            />
                        ))}
                    </div>
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {lightbox && (
                        <motion.div className="adventure-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
                            <motion.div
                                className="adventure-lightbox-content"
                                initial={{ scale: 0.85, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.85, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="adventure-lightbox-close" onClick={() => setLightbox(null)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <img src={lightbox.src} alt={lightbox.title} className="adventure-lightbox-img" />
                                <div className="adventure-lightbox-info">
                                    <div className="adventure-lightbox-header">
                                        <span className="adventure-country-badge large">{lightbox.flag && lightbox.flag + ' '}{lightbox.country}</span>
                                        <span className="adventure-lightbox-counter">{current + 1} / {total}</span>
                                    </div>
                                    <h3>{lightbox.title}</h3>
                                    <div className="adventure-card-location">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        {lightbox.location}
                                    </div>
                                </div>
                                <button className="adventure-lightbox-nav prev" onClick={() => go(-1)}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                </button>
                                <button className="adventure-lightbox-nav next" onClick={() => go(1)}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
