import React from 'react'

const alumni = [
  {
    name: "Thomas Carriero",
    image: "/alumni_images/thomas-carriero.jpeg",
    linkedin: "https://www.linkedin.com/in/thomas-carriero/",
    role: "Associate Backend Software Engineer at Pendo.io"
  },
  {
    name: "Adil Syed",
    image: "/alumni_images/adil-syed.jpeg",
    linkedin: "https://www.linkedin.com/in/adilsyed01/",
    role: "CXPM Specialist at Cisco"
  },
  {
    name: "Ivan Wu",
    image: "/alumni_images/ivan-wu.jpeg",
    linkedin: "https://www.linkedin.com/in/ivanwu7140/",
    role: "Technical Lead at UNC CS + Social Good"
  }
];

const Alumni = () => {
  return (
    <section className="min-h-screen w-full bg-lightnavy pt-32 pb-16 overflow-y-auto flex items-center justify-center relative">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-terqoizse/10 backdrop-blur-md rounded-3xl p-12 sm:p-16 border border-terqoizse/20 shadow-2xl shadow-black/10 hover:bg-terqoizse/15 transition-all duration-300">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 tracking-tight text-center bg-gradient-to-r from-terqoizse to-terqoizse/80 bg-clip-text text-transparent leading-[1.2] pb-4">
            Executive Team Alumni
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            {alumni.map((person, idx) => (
              <div 
                key={idx} 
                className="w-full max-w-[280px] cursor-pointer transform transition-transform hover:scale-105"
              >
                <div className="bg-terqoizse/10 backdrop-blur-sm rounded-2xl p-6 h-[380px] flex flex-col items-center hover:bg-terqoizse/15 transition-colors">
                  <div className="w-48 h-48 rounded-full bg-terqoizse/20 mb-6 overflow-hidden flex items-center justify-center">
                    {person.image ? (
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-terqoizse/20"></div>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
                    <a 
                      href={person.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-terqoizse hover:text-terqoizse/80 transition-colors underline decoration-2 underline-offset-4 hover:decoration-terqoizse/60"
                    >
                      {person.name}
                    </a>
                  </h3>
                  {person.role && (
                    <p className="text-lg text-terqoizse/80 text-center">
                      {person.role}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Alumni
