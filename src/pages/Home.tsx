// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import spaceCampModel from '../assets/unc_old_well.glb';

// function ThreeLogo() {
//   const { scene } = useGLTF(spaceCampModel);
//   return <primitive object={scene} scale={2} />;
// }

import instagramIcon from '../assets/instagram.svg';
import heelLifeIcon from '../assets/unc.svg';
import gmailIcon from '../assets/gmail.svg';

const Home = () => {


  return (
    <section className="min-h-screen w-full bg-[#4B9CD3] fixed inset-0 pt-16">
        <div className="flex flex-col items-start justify-center min-h-[calc(100vh-4rem)] text-white px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 max-w-[125rem] mx-auto relative">
            <div className="flex items-center gap-12 w-full">
                <div className="max-w-[40%]">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 sm:mb-4">Edge Carolina</h2>
                    <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-2 sm:mb-4">Input Some Quote Here</h3>
                    <p className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 max-w-3xl">Input Some Description Here</p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a href="/about" className="px-6 sm:px-8 py-2 sm:py-3 bg-[#13294B] hover:bg-[#13294B]/90 transition-colors duration-300 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-xl">About Us</a>
                        <a href="/events" className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-white hover:bg-white hover:text-[#4B9CD3] transition-colors duration-300 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Upcoming Events</a>
                    </div>

                    {/* Contact Us Area */}
                    <div className="mt-6 flex flex-col items-start">
                        <span className="font-semibold text-lg sm:text-xl mb-2">Contact Us</span>
                        <div className="flex gap-4">
                            {/* Instagram */}
                            <a href="/" className="flex items-center gap-2 text-white hover:text-[#E1306C] transition-colors" aria-label="Instagram">
                                <img src={instagramIcon} alt="Instagram" className="w-7 h-7" />
                                <span className="hidden sm:inline">Instagram</span>
                            </a>
                            {/* HeelLife */}
                            <a href="/" className="flex items-center gap-2 text-white hover:text-[#4B9CD3] transition-colors" aria-label="HeelLife">
                                <img src={heelLifeIcon} alt="HeelLife" className="w-7 h-7" />
                                <span className="hidden sm:inline">HeelLife</span>
                            </a>
                            {/* Email */}
                            <a href="/" className="flex items-center gap-2 text-white hover:text-[#13294B] transition-colors" aria-label="Email">
                                <img src={gmailIcon} alt="Email" className="w-7 h-7" />
                                <span className="hidden sm:inline">Email</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[55%] h-[80vh]">
                    <Canvas camera={{ position: [0, 0, 79], fov: 45 }}>
                        <ambientLight intensity={1.5} />
                        <pointLight position={[10, 10, 10]} intensity={1.5} />
                        <directionalLight position={[-5, 5, 5]} intensity={1} />
                        <Suspense fallback={null}>
                            <ThreeLogo />
                        </Suspense>
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div> */}
            </div>
        </div>
    </section>
  )
};

export default Home; 
