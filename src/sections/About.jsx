const About = () => {
  return (
<section id="about" className="bg-gray-100 text-gray-800 py-20 px-6">      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">
          About Me
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <p className="mb-4 text-lg leading-relaxed">
              I am <span className="font-semibold">Ankit Kumar</span>, a frontend-focused developer 
              with strong knowledge of JavaScript, React, and modern UI frameworks.
            </p>

            <p className="mb-4 text-lg leading-relaxed">
              I enjoy building scalable, responsive, and user-friendly web applications. 
              I have worked on multiple projects including a Netflix clone, an e-commerce 
              platform using PHP, and a community discussion platform.
            </p>

            <p className="text-lg leading-relaxed">
              My goal is to grow as a full-stack developer and contribute to real-world projects.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Info</h3>

            <ul className="space-y-2">
              <li><strong>Name:</strong> Ankit Kumar</li>
              <li><strong>Role:</strong> Frontend Developer</li>
              <li><strong>Experience:</strong> Fresher</li>
              <li><strong>Location:</strong> India</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About