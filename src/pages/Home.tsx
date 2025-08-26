import React from 'react';
import instagramIcon from '../assets/instagram.svg';
import heelLifeIcon from '../assets/unc.svg';
import gmailIcon from '../assets/gmail.svg';

const Home = () => {
  return (
    <section
      className="min-h-screen w-full fixed inset-0 pt-16"
      style={{
        background: 'linear-gradient(to bottom, #22335b 0px, #22335b 50%, #415e7c 75%, #8eb8d1 100%)'
      }}
    >
      <div className="flex flex-col items-start justify-center min-h-[calc(100vh-4rem)] text-terqoizse px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 max-w-[125rem] mx-auto relative">
        <div className="flex items-center gap-12 w-full">
          <div className="max-w-full md:max-w-[60%]">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 sm:mb-4">
              Edge Carolina
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-2 sm:mb-4">
              Build &gt; Talk
            </h3>
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 max-w-3xl">
              A student-run builders’ org at UNC-Chapel Hill. We run <span className="font-semibold">Edge Labs</span>:
              short lightning talks followed by focused build sprints—so you ship real projects, fast.
              Beginners get scaffolding; teams get structure; everyone leaves with progress.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="/about"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-terqoizse hover:bg-skyblue transition-colors duration-300 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-lightnavy"
              >
                About Us
              </a>
              <a
                href="/events"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-terqoizse hover:bg-terqoizse hover:text-lightnavy transition-colors duration-300 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-terqoizse"
              >
                Upcoming Events
              </a>
            </div>

            {/* Contact Us Area */}
            <div className="mt-6 flex flex-col items-start">
              <span className="font-semibold text-lg sm:text-xl mb-2">Contact Us</span>
              <div className="flex gap-4">
                {/* Instagram */}
                <a href="https://www.instagram.com/edge.carolina/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-terqoizse hover:text-[#E1306C] transition-colors" aria-label="Instagram">
                  <img src={instagramIcon} alt="Instagram" className="w-7 h-7" />
                  <span className="hidden sm:inline">Instagram</span>
                </a>
                {/* HeelLife */}
                <a href="https://heellife.unc.edu/organization/edge-carolina" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-terqoizse hover:text-skyblue transition-colors" aria-label="HeelLife">
                  <img src={heelLifeIcon} alt="HeelLife" className="w-7 h-7" />
                  <span className="hidden sm:inline">HeelLife</span>
                </a>
                {/* Email */}
                <a href="mailto:edgecarolina@outlook.com" className="flex items-center gap-2 text-terqoizse hover:text-deepnavy transition-colors" aria-label="Email">
                  <img src={gmailIcon} alt="Email" className="w-7 h-7" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
