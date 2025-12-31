import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { IoCall } from "react-icons/io5";
import { Link } from 'react-router';


const About = () => {
  return (
    <div>
      <NavBar></NavBar>

      <div className="py-24 px-4 min-h-screen bg-black text-white font-mon">

        {/* Title */}
        <h1 className="text-orange-500 text-6xl font-met font-bold text-center my-20">
          About CINEMINE
        </h1>

        {/* Main Grid */}
        <div className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* IMAGE GROUP */}
          <div className="flex justify-center md:sticky mt-20 animate-float pr-20">
            <div className='w-72 md:w-92 lg:w-122 h-72 md:h-80 lg:h-102 grid grid-cols-2 items-center justify-center mx-20 gap-4 rotate-10'>
              <div className='flex items-center justify-center'>
                <div className='w-25 md:w-45 lg:w-60 h-25 md:h-45 lg:h-60 flex items-center justify-center overflow-hidden rounded-full  border-2 border-[orange] hover:scale-110 transition-transform duration-300 animate-spin-slow'><img src="/Images/1.jpg" alt="" className='-rotate-10 hover:scale-115 transition-transform duration-400' />
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <div className=' w-25 md:w-45 lg:w-60 h-25 md:h-45 lg:h-60 flex items-center justify-center overflow-hidden  border-2  border-[orange] hover:scale-110 transition-transform duration-300'><img src="/Images/3.jpg" alt="" className='-rotate-10 hover:scale-115 transition-transform duration-400' />
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <div className=' w-25 md:w-45 lg:w-60 h-25 md:h-45 lg:h-60 flex items-center justify-center overflow-hidden border-2  border-[orange] hover:scale-110 transition-transform duration-300'><img src="/Images/2.jpg" alt="" className='-rotate-10 hover:scale-115 transition-transform duration-400' />
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <div className=' w-25 md:w-45 lg:w-60 h-25 md:h-45 lg:h-60 flex items-center justify-center overflow-hidden  rounded-full  border-2 border-[orange] hover:scale-110 transition-transform duration-300 animate-spin-slow'><img src="/Images/4.jpg" alt="" className='-rotate-10 hover:scale-115 transition-transform duration-400' />
                </div>
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-16 pr-20 animate-slideLeft">

            {/* Intro */}
            <div>
              <h3 className="text-yellow-400 text-3xl font-nos font-bold mb-4 animate-fadeUp">
                Welcome to CINEMINE
              </h3>
              <p className="text-gray-300 leading-relaxed  text-justify">
                CINEMINE is a cinematic universe built for true movie lovers.
                From timeless classics to modern blockbusters, our platform lets
                you explore, discover, and connect through the magic of cinema.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-yellow-400 text-2xl font-nos font-bold mb-4">
                Our Mission & Vision
              </h3>
              <ul className="space-y-3 text-gray-300 list-disc list-inside">
                <li>Build a strong global movie-lover community</li>
                <li>Deliver a smooth and immersive movie experience</li>
                <li>Become a trusted digital hub for cinema enthusiasts</li>
              </ul>
            </div>

            {/* Progress */}
            <div>
              <h3 className="text-yellow-400 text-2xl font-nos font-bold mb-4">
                Our Progress
              </h3>
              <ul className="space-y-3 text-gray-300 list-disc list-inside">
                <li>Rapidly growing international audience</li>
                <li>Expanded library with classics & latest releases</li>
                <li>Constant UI/UX and feature improvements</li>
              </ul>
            </div>

          </div>
        </div>

        {/* DEVELOPERS */}
        <section className="max-w-6xl mx-auto mt-32">
          <h3 className="text-yellow-400 text-3xl font-nos font-bold mb-14 text-center">
            Developers
          </h3>

          <div className="space-y-20">

            {/* Dev Card */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src="/Author/cheif.jpg"
                className="w-40 h-40 object-cover rounded-xl border border-orange-500"
                alt=""
              />
              <div>
                <h4 className="text-xl text-orange-400 font-met font-bold">
                  Md. Atikur Rahman
                </h4>
                <p className="text-gray-300 mt-3 leading-relaxed">
                  Creator of CINEMINE, a passionate Front-End Developer who blends
                  creativity with clean UI to build immersive digital experiences.
                </p>
                <p className="text-gray-400 mt-4">
                  Front-End Developer • Narsingdi Polytechnic Institute
                </p>
              </div>
            </div>

            {/* Dev Card 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src="/Author/dept.png"
                className="w-40 h-40 object-cover rounded-xl border border-orange-500"
                alt=""
              />
              <div>
                <h4 className="text-xl text-orange-400 font-met font-bold">
                  Md. Mahdi Hasan
                </h4>
                <p className="text-gray-300 mt-3 leading-relaxed">
                  Deputy Developer of CINEMINE, contributing ideas, structure and
                  improvements with passion and consistency.
                </p>
                <p className="text-gray-400 mt-4">
                  Front-End Developer • Narsingdi Polytechnic Institute
                </p>
              </div>
            </div>

          </div>
        </section>

        <Link to="/contact" className="mt-10 flex items-center justify-center">
          <button className="mt-10 flex items-center gap-2 bg-green-600 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-full transition-all duration-300 hover:scale-105 group">
            <IoCall className="text-lg transition-transform duration-300 group-hover:rotate-12" />
            <span className='font-bold text-xl'>Contact Us</span>
          </button>
        </Link>
      </div>

    </div>
  )
}

export default About