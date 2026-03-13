import img1 from "../assets/1.jpg";
const Projects = () => {
  const projects = [
    {
      title: "Netflix Clone",
      desc: "Built a responsive streaming UI using React and Tailwind. Implemented API fetching, dynamic routing, and modern UI design.",
      tech: ["React", "Tailwind", "API"],
      github: "#",
      live: "#",
      img: img1,
    },
    {
      title: "E-commerce Website (PHP)",
      desc: "Developed full e-commerce functionality with login, cart, checkout, and admin panel using PHP and MySQL.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      github: "#",
      live: "#",
      img: "/src/assets/2.jpg",
    },
    {
      title: "Community Discussion Platform",
      desc: "Built a community platform with posts, interactions, and modern UI using React and state management.",
      tech: ["React", "Context API", "Tailwind"],
      github: "#",
      live: "#",
      img: "/src/assets/3.jpg",
    },
    // {
    //   title: "Community Discussion Platform",
    //   desc: "Built a community platform with posts, interactions, and modern UI using React and state management.",
    //   tech: ["React", "Context API", "Tailwind"],
    //   github: "#",
    //   live: "#",
    //   img: "/src/assets/3.jpg",
    // },
  ]

  return (
<section id="projects" className="py-20 bg-gray-100 px-6">      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
<div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition duration-300">
              <img
  src={project.img}
  className="rounded-lg mb-4"
/>

              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.desc}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a href={project.github} className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                  GitHub
                </a>

                <a href={project.live} className="border px-4 py-2 rounded-lg text-sm">
                  Live Demo
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects