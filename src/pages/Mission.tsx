import React from 'react'

const missionAreas = [
  {
    title: 'Innovative Research',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.'
  },
  {
    title: 'Community Engagement',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
  },
  {
    title: 'Educational Excellence',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  {
    title: 'Sustainable Impact',
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
  }
];

const Mission = () => {
  return (
    <section className="min-h-screen w-full bg-lightnavy pt-32 pb-16 overflow-y-auto flex items-center justify-center relative">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-terqoizse/10 backdrop-blur-md rounded-3xl p-12 sm:p-16 border border-terqoizse/20 shadow-2xl shadow-black/10 hover:bg-terqoizse/15 transition-all duration-300">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 tracking-tight text-center bg-gradient-to-r from-terqoizse to-terqoizse/80 bg-clip-text text-transparent leading-[1.2] pb-4">
            Our Mission
          </h2>
          <div className="space-y-12">
            {missionAreas.map((area, idx) => (
              <div key={idx} className="">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-terqoizse/90">
                  {area.title}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-terqoizse/80 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission