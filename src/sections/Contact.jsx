const Contact = () => {
  return (
<section id="contact" className="py-20 bg-black text-white px-6">      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="mb-10 text-gray-300">
          Feel free to contact me for collaboration or job opportunities.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 mb-10">
          <p>📧 Email: yourmail@gmail.com</p>
          <p>💼 LinkedIn: linkedin.com/in/ankit-kumar</p>
          <p>💻 GitHub: github.com/yourusername</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="mailto:yourmail@gmail.com"
            className="bg-blue-500 px-6 py-2 rounded-lg"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com"
            className="border px-6 py-2 rounded-lg"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact