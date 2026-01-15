import React from 'react'

const missionAreas = [
  {
    title: 'Make UNC a Building Campus',
    description:
      'We promote a builder culture where students ship tangible projects—apps, tools, research demos—on a steady cadence. Less talk, more build; visible outcomes over vague intentions.'
  },
  {
    title: 'Edge Labs: Hands-On, Not Lectures',
    description:
      'Each session pairs a short lightning talk with a focused build sprint. Beginners get scaffolding and starter repos; advanced members move fast with structure and accountability.'
  },
  {
    title: 'Community, Accountability, Momentum',
    description:
      'Clear roles, weekly check-ins, and demos keep teams aligned. We use practical Agile games and two-week sprints to help members form habits that actually stick.'
  },
  {
    title: 'Public Showcases & Outreach',
    description:
      'We host end-of-semester showcases, run fundraisers, and grow our social presence to celebrate members’ work. A little external pressure—and a cheering section—goes a long way.'
  }
];

const Mission = () => {
  return (
    <section className="min-h-screen w-full pt-32 pb-16 overflow-y-auto flex items-center justify-center relative">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-terqoizse/10 backdrop-blur-md rounded-3xl p-12 sm:p-16 border border-terqoizse/20 shadow-2xl shadow-black/10 hover:bg-terqoizse/15 transition-all duration-300">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 tracking-tight text-center bg-gradient-to-r from-terqoizse to-terqoizse/80 bg-clip-text text-transparent leading-[1.2] pb-4">
            Our Mission
          </h2>
          <div className="space-y-12">
            {missionAreas.map((area, idx) => (
              <div key={idx}>
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
