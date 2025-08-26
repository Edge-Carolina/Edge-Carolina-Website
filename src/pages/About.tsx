import React from 'react';

// Cloud component
const Cloud = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 40C15 40 5 35 5 25C5 15 15 10 25 10C25 5 35 0 45 0C55 0 65 5 65 10C75 10 85 15 85 25C85 35 75 40 65 40H25Z"
      fill="rgba(255, 255, 255, 0.2)"
    />
  </svg>
);

// Executive team data with actual profile images and placeholders
const executiveTeam = [
  {
    name: "Weston Voglesonger",
    position: "Founder & CEO",
    image: "/exec_images/weston-voglesonger.jpeg"
  },
  {
    name: "Nate Ward",
    position: "Chief Communications Officer",
    image: "/exec_images/nate-ward.jpeg"
  },
  {
    name: "Francisco Vasquez",
    position: "Treasurer",
    image: "/exec_images/francisco-vasquez.jpeg"
  },
  {
    name: "Avery Phillips",
    position: "Social Media and Design Lead",
    image: "/exec_images/avery-phillips.jpeg"
  },
  {
    name: "Adil",
    position: "Chief Development Officer",
    image: "/exec_images/adil-syed.jpeg"
  },
  {
    name: "Aryan Choudhary",
    position: "Executive Advisor",
    image: "/exec_images/aryan-chaudhary.jpeg"
  },
  {
    name: "Will Zellers",
    position: "Programs Lead — Edge Labs",
    image: "/exec_images/will-zellers.jpeg"
  },
  {
    name: "Veer Goparaju",
    position: "Chief Financial Officer",
  },
  
];

const About = () => {
  return (
    <section className="min-h-screen w-full bg-lightnavy pt-32 pb-16 overflow-y-auto relative">
      {/* Cloud animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Cloud className="absolute top-[10%] left-0 w-[20vw] h-[10vw] animate-cloud-1" />
        <Cloud className="absolute top-[15%] right-[10%] w-[25vw] h-[12.5vw] animate-cloud-2" />
        <Cloud className="absolute top-[25%] left-[15%] w-[22vw] h-[11vw] animate-cloud-3" />
        <Cloud className="absolute top-[35%] right-[20%] w-[18vw] h-[9vw] animate-cloud-4" />
        <Cloud className="absolute top-[45%] left-[25%] w-[28vw] h-[14vw] animate-cloud-5" />
        <Cloud className="absolute top-[55%] right-[15%] w-[24vw] h-[12vw] animate-cloud-6" />
        <Cloud className="absolute top-[65%] left-[20%] w-[30vw] h-[15vw] animate-cloud-7" />
        <Cloud className="absolute top-[75%] right-[25%] w-[26vw] h-[13vw] animate-cloud-8" />
        <Cloud className="absolute top-[85%] left-[10%] w-[22vw] h-[11vw] animate-cloud-9" />
        <Cloud className="absolute top-[20%] left-[30%] w-[32vw] h-[16vw] animate-cloud-10" />
        <Cloud className="absolute top-[40%] right-[5%] w-[28vw] h-[14vw] animate-cloud-11" />
        <Cloud className="absolute top-[60%] left-[35%] w-[24vw] h-[12vw] animate-cloud-12" />
        <Cloud className="absolute top-[80%] right-[35%] w-[30vw] h-[15vw] animate-cloud-13" />
        <Cloud className="absolute top-[30%] left-[40%] w-[26vw] h-[13vw] animate-cloud-14" />
        <Cloud className="absolute top-[50%] right-[40%] w-[22vw] h-[11vw] animate-cloud-15" />
      </div>

      <div className="flex flex-col items-start justify-start min-h-screen text-terqoizse px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 max-w-[125rem] mx-auto relative z-10">
        {/* About Section */}
        <div className="w-full max-w-5xl mx-auto mb-32">
          <div className="bg-terqoizse/10 backdrop-blur-md rounded-3xl p-16 border border-terqoizse/20 shadow-2xl shadow-black/10 hover:bg-terqoizse/15 transition-all duration-300">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 tracking-tight text-center bg-gradient-to-r from-terqoizse to-terqoizse/80 bg-clip-text text-transparent leading-[1.2] pb-4">
              About Edge Carolina
            </h2>
            <div className="space-y-12">
              <p className="text-xl sm:text-2xl md:text-3xl text-terqoizse/90 leading-relaxed">
                Edge Carolina is a student-run builders’ guild at UNC-Chapel Hill.
                We exist to make UNC a <span className="font-semibold">building campus</span>—a place where
                students regularly turn ideas into working projects, not just pitch decks. Founded by
                Weston Voglesonger, Edge Carolina grew out of the belief that teams need
                structure, clear roles, and hands-on time to build. Talking is fine; <span className="font-semibold">building is the point</span>.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-terqoizse/90 leading-relaxed">
                Our flagship program is <span className="font-semibold">Edge Labs</span>: 2-hour sessions with a short lightning talk
                followed by a focused build sprint. Members work on personal or small-team projects
                (web apps, tools, hardware concepts), and beginners get scaffolding instead of lectures.
                We’ve run activities like Agile games, a two-week portfolio site challenge, and hands-on
                workshops designed to be productive <em>and</em> fun.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-terqoizse/90 leading-relaxed">
                The community is mostly first-years and early builders with basic Python/JS experience,
                plus a few more advanced mentors. To improve commitment and meeting value, we’ve explored
                light membership dues, clearer expectations, public showcases, and better social presence
                (including more interactive Instagram content). The goal: a reliable cadence, higher
                attendance, and tangible outcomes members can be proud of.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-terqoizse/90 leading-relaxed">
                We run fundraisers (like a Spicy 9 night), organize end-of-semester showcases, and handle the
                unglamorous ops so members can focus on building. If you want to learn by
                doing—and ship real projects with a small, motivated crew—you’ll fit right in.
              </p>
            </div>
          </div>
        </div>

        {/* Executive Team Section */}
        <div className="w-full mb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 tracking-tight text-center">
            Meet The Executive Team
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {/* First set of cards */}
              {executiveTeam.map((member, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex-none w-[280px] cursor-pointer transform transition-transform hover:scale-105"
                >
                  <div className="bg-terqoizse/10 backdrop-blur-sm rounded-2xl p-6 h-[380px] flex flex-col items-center hover:bg-terqoizse/15 transition-colors">
                    <div className="w-48 h-48 rounded-full bg-terqoizse/20 mb-6 overflow-hidden flex items-center justify-center">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-terqoizse/20"></div>
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-lg text-terqoizse/80 text-center">{member.position}</p>
                  </div>
                </div>
              ))}
              {/* Duplicate set of cards for seamless loop */}
              {executiveTeam.map((member, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex-none w-[280px] cursor-pointer transform transition-transform hover:scale-105"
                >
                  <div className="bg-terqoizse/10 backdrop-blur-sm rounded-2xl p-6 h-[380px] flex flex-col items-center hover:bg-terqoizse/15 transition-colors">
                    <div className="w-48 h-48 rounded-full bg-terqoizse/20 mb-6 overflow-hidden flex items-center justify-center">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-terqoizse/20"></div>
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-lg text-terqoizse/80 text-center">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Gradient fade effects */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-lightnavy to-transparent pointer-events-none"></div>
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-lightnavy to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-280px * 8));
            }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
            will-change: transform;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
          /* Smooth scrolling for manual navigation */
          .animate-scroll {
            scroll-behavior: smooth;
          }

          @keyframes cloud-1 { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
          @keyframes cloud-2 { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
          @keyframes cloud-3 { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
          @keyframes cloud-4 { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
          @keyframes cloud-5 { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
          @keyframes cloud-6 { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
          @keyframes cloud-7 { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
          @keyframes cloud-8 { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
          @keyframes cloud-9 { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
          @keyframes cloud-10 { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
          @keyframes cloud-11 { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
          @keyframes cloud-12 { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
          @keyframes cloud-13 { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
          @keyframes cloud-14 { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
          @keyframes cloud-15 { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }

          .animate-cloud-1 { animation: cloud-1 60s linear infinite; }
          .animate-cloud-2 { animation: cloud-2 80s linear infinite; }
          .animate-cloud-3 { animation: cloud-3 70s linear infinite; }
          .animate-cloud-4 { animation: cloud-4 90s linear infinite; }
          .animate-cloud-5 { animation: cloud-5 75s linear infinite; }
          .animate-cloud-6 { animation: cloud-6 85s linear infinite; }
          .animate-cloud-7 { animation: cloud-7 65s linear infinite; }
          .animate-cloud-8 { animation: cloud-8 95s linear infinite; }
          .animate-cloud-9 { animation: cloud-9 70s linear infinite; }
          .animate-cloud-10 { animation: cloud-10 82s linear infinite; }
          .animate-cloud-11 { animation: cloud-11 68s linear infinite; }
          .animate-cloud-12 { animation: cloud-12 88s linear infinite; }
          .animate-cloud-13 { animation: cloud-13 72s linear infinite; }
          .animate-cloud-14 { animation: cloud-14 78s linear infinite; }
          .animate-cloud-15 { animation: cloud-15 92s linear infinite; }
        `}
      </style>
    </section>
  );
};

export default About;
