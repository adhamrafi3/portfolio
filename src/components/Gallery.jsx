import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// --- ARC 2024 ---
import arc1 from '../assets/gallery/arc-1.jpg'
import arc2 from '../assets/gallery/arc-2.jpg'
import arc3 from '../assets/gallery/arc-3.jpg'
import arc4 from '../assets/gallery/arc-4.jpg'
import arc5 from '../assets/gallery/arc-5.jpg'
import arc6 from '../assets/gallery/arc-6.jpg'
import arcTeam from '../assets/gallery/arc-team.jpg'
import arcLeaderboard from '../assets/gallery/arc-leaderboard.jpg'

// --- Technovation 2.0 ---
import tech1 from '../assets/gallery/technovation-1.jpg'
import tech2 from '../assets/gallery/technovation-2.jpg'
import tech3 from '../assets/gallery/technovation-3.jpg'

// --- Capstone 2025 ---
import cap1 from '../assets/gallery/capstone-1.jpg'
import cap2 from '../assets/gallery/capstone-2.jpg'
import cap3 from '../assets/gallery/capstone-3.jpg'
import cap4 from '../assets/gallery/capstone-4.jpg'
import cap5 from '../assets/gallery/capstone-5.jpg'
import cap6 from '../assets/gallery/capstone-6.jpg'

// --- World Robotics Championship 2022 ---
import wrc1 from '../assets/gallery/485167165_3484664271665113_7644120317782615867_n.jpg'
import wrc2 from '../assets/gallery/489966332_9727733143928491_2062109966282473644_n.jpg'
import wrc3 from '../assets/gallery/490134119_9727733307261808_3496140137771557479_n.jpg'
import wrc4 from '../assets/gallery/490447703_9727731873928618_278560770830472535_n.jpg'
import wrc5 from '../assets/gallery/490807542_9727733277261811_7884052950882205385_n.jpg'

const galleryItems = [
    {
        category: 'Australian Rover Challenge 2024',
        tag: 'ARC',
        images: [
            { src: arcTeam, caption: 'Team Atlas at ARC 2024, Adelaide, Australia' },
            { src: arc1, caption: 'Rover testing on the competition field' },
            { src: arc2, caption: 'Representing Bangladesh on the world stage' },
            { src: arc3, caption: 'Mars rover deployment and field operations' },
            { src: arc4, caption: 'Competition moments at ARC 2024' },
            { src: arc5, caption: 'Team collaboration during the challenge' },
            { src: arc6, caption: 'Behind the scenes at the rover championship' },
            { src: arcLeaderboard, caption: 'Final Leaderboard — Team Atlas' },
        ],
    },
    {
        category: 'World Robotics Championship 2022',
        tag: 'WRC',
        images: [
            { src: wrc1, caption: 'World Robotics Championship 2022' },
            { src: wrc2, caption: 'Competing on the international stage' },
            { src: wrc3, caption: 'Team showcase at WRC 2022' },
            { src: wrc4, caption: 'Robotics competition in action' },
            { src: wrc5, caption: 'Memorable moments at WRC' },
        ],
    },
    {
        category: 'Capstone & Senior Projects 2025',
        tag: 'Capstone',
        images: [
            { src: cap1, caption: 'Capstone project presentation' },
            { src: cap2, caption: 'Senior design showcase' },
            { src: cap3, caption: 'Project demonstration session' },
            { src: cap4, caption: 'Research presentation at NSU' },
            { src: cap5, caption: 'Team working on the capstone project' },
            { src: cap6, caption: 'Final capstone defense' },
        ],
    },
    {
        category: 'Technovation 2.0 — Champion',
        tag: 'Technovation',
        images: [
            { src: tech1, caption: 'Technovation 2.0 robotics competition' },
            { src: tech2, caption: 'Building autonomous robots' },
            { src: tech3, caption: 'Winning moment at Technovation 2.0' },
        ],
    },
]

// Flatten all images
const allImages = galleryItems.flatMap((group) =>
    group.images.map((img) => ({ ...img, category: group.category, tag: group.tag }))
)

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
}

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { type: 'spring', stiffness: 120, damping: 16 }
    }
}

export default function Gallery() {
    const [lightboxIdx, setLightboxIdx] = useState(null)

    const openLightbox = (idx) => setLightboxIdx(idx)
    const closeLightbox = () => setLightboxIdx(null)

    const navigate = (dir) => {
        setLightboxIdx((prev) => (prev + dir + allImages.length) % allImages.length)
    }

    useEffect(() => {
        if (lightboxIdx === null) return
        const handleKey = (e) => {
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowRight') navigate(1)
            if (e.key === 'ArrowLeft') navigate(-1)
        }
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKey)
        return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKey) }
    }, [lightboxIdx])

    let globalIdx = 0

    return (
        <section className="section" id="gallery">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">📸 Behind the Scenes</span>
                    <h2 className="section-title">Moments That Matter</h2>
                    <p className="section-subtitle">
                        From the red deserts of Australia to robotics arenas — highlights from competitions, projects, and experiences.
                    </p>
                </div>

                {/* Gallery Groups */}
                <div className="gallery-container">
                    {galleryItems.map((group) => (
                        <div key={group.tag} className="gallery-group reveal">
                            <h3 className="gallery-group-title">{group.category}</h3>
                            <motion.div
                                className="gallery-grid"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.05 }}
                            >
                                {group.images.map((img, idx) => {
                                    const flatIdx = globalIdx++
                                    return (
                                        <motion.div
                                            key={idx}
                                            className="gallery-item"
                                            variants={cardVariants}
                                            whileHover={{ y: -4 }}
                                            onClick={() => openLightbox(flatIdx)}
                                        >
                                            <img src={img.src} alt={img.caption} loading="lazy" />
                                            <div className="gallery-overlay">
                                                <span>{img.caption}</span>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {lightboxIdx !== null && (
                        <motion.div className="adventure-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeLightbox}>
                            <motion.div
                                className="adventure-lightbox-content"
                                initial={{ scale: 0.85, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.85, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="adventure-lightbox-close" onClick={closeLightbox}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                                <img src={allImages[lightboxIdx].src} alt={allImages[lightboxIdx].caption} className="adventure-lightbox-img" />
                                <div className="adventure-lightbox-info">
                                    <div className="adventure-lightbox-header">
                                        <span className="adventure-country-badge large">{allImages[lightboxIdx].tag}</span>
                                        <span className="adventure-lightbox-counter">{lightboxIdx + 1} / {allImages.length}</span>
                                    </div>
                                    <h3>{allImages[lightboxIdx].caption}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{allImages[lightboxIdx].category}</p>
                                </div>
                                <button className="adventure-lightbox-nav prev" onClick={() => navigate(-1)}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                </button>
                                <button className="adventure-lightbox-nav next" onClick={() => navigate(1)}>
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
