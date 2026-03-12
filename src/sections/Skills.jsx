const Skills = () => {
  const skillsData = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "PHP", "MySQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma"],
    },
  ]

  return (
<section id="skills" className="py-20 bg-white text-gray-800 px-6">      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="shadow-lg rounded-xl p-6 hover:shadow-xl transition">

              <h3 className="text-xl font-semibold mb-4 text-center">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills