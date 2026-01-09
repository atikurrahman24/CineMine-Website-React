import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { IoCall } from "react-icons/io5"
import { Link } from 'react-router'

const About = () => {
  return (
    <div>
      <NavBar />

      <div className="py-24 px-4 md:px-10 lg:px-20 min-h-screen bg-black text-white font-mon">

        {/* Title */}
        <h1 className="text-orange-500 text-4xl sm:text-5xl md:text-6xl font-met font-bold text-center my-20">
          About CINEMINE
        </h1>
        <hr className="mb-12" />

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* IMAGE GROUP */}
          <div className="flex justify-center md:sticky md:top-32 animate-float">
            <div
              className="
      w-64 h-64
      sm:w-80 sm:h-80
      md:w-96 md:h-96
      lg:w-[32rem] lg:h-[32rem]
      grid grid-cols-2 gap-4 rotate-6
    "
            >

              {/* Top Left – CIRCLE (spin) */}
              <div className="flex items-center justify-center">
                <div
                  className="
          w-24 h-24
          sm:w-32 sm:h-32
          md:w-44 md:h-44
          lg:w-56 lg:h-56
          rounded-full
          overflow-hidden
          border-2 border-orange-500
          animate-spin-slow
        "
                >
                  <img
                    src="/Images/1.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Top Right – SQUARE */}
              <div className="flex items-center justify-center">
                <div className="
                            w-24 h-24
                            sm:w-32 sm:h-32
                            md:w-44 md:h-44
                            lg:w-56 lg:h-56
                            overflow-hidden
                            border-2 border-orange-500
                            ">
                  <img
                    src="/Images/3.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Left – SQUARE */}
              <div className="flex items-center justify-center">
                <div
                  className="
          w-24 h-24
          sm:w-32 sm:h-32
          md:w-44 md:h-44
          lg:w-56 lg:h-56
          overflow-hidden
          border-2 border-orange-500
        "
                >
                  <img
                    src="/Images/2.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Right – CIRCLE (spin) */}
              <div className="flex items-center justify-center">
                <div
                  className="
          w-24 h-24
          sm:w-32 sm:h-32
          md:w-44 md:h-44
          lg:w-56 lg:h-56
          rounded-full
          overflow-hidden
          border-2 border-orange-500
          animate-spin-slow
        "
                >
                  <img
                    src="/Images/4.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>


          {/* TEXT CONTENT */}
          <div className="space-y-16 animate-slideLeft text-center md:text-left">

            {/* Intro */}
            <div>
              <h3 className="text-yellow-400 text-3xl font-nos font-bold mb-4 animate-fadeUp">
                Welcome to CINEMINE
              </h3>
              <p className="text-gray-300 leading-relaxed text-justify md:text-left">
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
              <ul className="space-y-3 text-gray-300 list-disc list-inside text-left">
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
              <ul className="space-y-3 text-gray-300 list-disc list-inside text-left">
                <li>Rapidly growing international audience</li>
                <li>Expanded library with classics & latest releases</li>
                <li>Constant UI/UX and feature improvements</li>
              </ul>
            </div>

          </div>
        </div>

        {/* DEVELOPERS */}
        <section className="max-w-7xl mx-auto mt-32">
          <h3 className="text-yellow-400 text-3xl font-nos font-bold mb-14 text-center">
            Developer
          </h3>
          <hr className="mb-12" />

          <div className="space-y-12">

            {/* Dev Card */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <img
                src="/Author/cheif.jpg"
                className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-xl border border-orange-500"
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
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <img
                src="/Author/dept.png"
                className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-xl border border-orange-500"
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

        {/* Contact Button */}
        <Link to="/contact" className="mt-20 flex justify-center">
          <button className="flex items-center gap-3 bg-green-600 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 group">
            <IoCall className="text-xl transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-lg">Contact Us</span>
          </button>
        </Link>

      </div>
    </div>
  )
}

export default About
