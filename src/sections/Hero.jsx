import { motion } from "framer-motion"

<motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl font-bold mb-4"
>
  Hi, I'm <span className="text-blue-500">Ankit Kumar</span>
</motion.h1>

const Hero = () => {
  return (
<section id="hero" className="min-h-screen flex items-center justify-center bg-black text-white">      <div className="text-center">
       <motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl font-bold mb-4"
>
          Hi, I'm <span className="text-blue-500">Ankit Kumar</span>
        </motion.h1>

       <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  className="text-lg mb-6"
>
          Frontend Developer building modern and responsive web applications.
       </motion.p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 px-6 py-2 rounded-lg">
            View Projects
          </button>

          <a
  href="/src/assets/resume.pdf"
  download
  className="border border-white px-6 py-2 rounded-lg"
>
  Download Resume
</a>
        </div>
      </div>
    </section>
  )
}

export default Hero