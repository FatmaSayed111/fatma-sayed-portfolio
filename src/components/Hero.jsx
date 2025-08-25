import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="section pt-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial"></div>
      <div className="absolute inset-0 bg-grid" style={{ backgroundSize: '24px 24px', maskImage: 'radial-gradient(circle at 60% 0%, black, transparent 70%)' }} />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="subheading mb-3">Front‑End Developer</p>
          <h1 className="heading leading-tight mb-4 drop-shadow-glow">
            Hi, I’m <span className="text-emerald-400">Fatma Sayed</span>
          </h1>
          <p className="text-slate-300 text-lg mb-6">
            I craft fast, accessible, and delightful UIs with React and Tailwind. Strong problem-solving, clear communication.
          </p>
          <div className="flex items-center gap-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/cv.pdf" className="btn btn-ghost">Download CV</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
