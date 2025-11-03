import React from 'react'

const NavBar = () => {
    return (
        <div>
            <div className="navbar shadow-md bg-black/40 backdrop-blur-md text-white fixed top-0 z-1000">
                <div className='w-11/12 mx-auto flex justify-between items-center'>
                    <div className="navbar-start ">
                        {/* Mobile UI Starts*/}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>

                            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-black/40 backdrop-blur-md rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {/* Short List 1 */}
                                <li>
                                    <details>
                                        <summary>Types</summary>
                                        <ul className="p-2">
                                            <li><a>Movies</a></li>
                                            <li><a>Series</a></li>
                                        </ul>
                                    </details>
                                </li>
                                {/* Short List 2 */}
                                <li>
                                    <details>
                                        <summary>Genres</summary>
                                        <ul className="p-2">
                                            <li><a>Action</a></li>
                                            <li><a>Fantacy</a></li>
                                            <li><a>Crime</a></li>
                                            <li><a>Drama</a></li>
                                            <li><a>Adventure</a></li>
                                            <li><a>Sci-Fi</a></li>
                                            <li><a>Comedy</a></li>
                                            <li><a>Thriller</a></li>
                                            <li><a>Romance</a></li>
                                            <li><a>Biography</a></li>
                                        </ul>
                                    </details>
                                </li>
                                {/* Short List 3 */}
                                <li>
                                    <details>
                                        <summary>Industry</summary>
                                        <ul className="p-2">
                                            <li><a>Hollywood</a></li>
                                            <li><a>Bollywood</a></li>
                                            <li><a>DCEU</a></li>
                                            <li><a>DCU</a></li>
                                            <li><a>MCU</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                        {/* Mobile UI Ends*/}

                        <div className='flex items-center gap-20'>
                            <div className='flex items-center justify-center gap-2 '>
                                <img className='w-12' src="/Logos/CM-Text-.png" alt="" />
                                <a className="text-3xl text-orange-700 font-extrabold mb-1">CineMine</a>
                            </div>

                            {/* Desctop UI Starts*/}
                            <div className="navbar-center hidden lg:flex">
                                {/* Center Items */}
                                <ul className="menu menu-horizontal px-1 ">

                                    {/* Short List 1 */}
                                    <li>
                                        <details>
                                            <summary className='text-xl text-white/80'>Types</summary>
                                            <ul className="p-2">
                                                <li><a>Movies</a></li>
                                                <li><a>Series</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                    {/* Short List 2 */}
                                    <li>
                                        <details>
                                            <summary className='text-xl text-white/80'>Genres</summary>
                                            <ul className="p-2">
                                                <li><a>Action</a></li>
                                                <li><a>Fantacy</a></li>
                                                <li><a>Crime</a></li>
                                                <li><a>Drama</a></li>
                                                <li><a>Adventure</a></li>
                                                <li><a>Sci-Fi</a></li>
                                                <li><a>Comedy</a></li>
                                                <li><a>Thriller</a></li>
                                                <li><a>Romance</a></li>
                                                <li><a>Biography</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                    {/* Short List 3 */}
                                    <li>
                                        <details className='text-xl text-white/80'>
                                            <summary>Industry</summary>
                                            <ul className="p-2">
                                                <li><a>Hollywood</a></li>
                                                <li><a>Bollywood</a></li>
                                                <li><a>DCEU</a></li>
                                                <li><a>DCU</a></li>
                                                <li><a>MCU</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                            {/* Desctop UI Ends*/}
                        </div>

                    </div>

                    {/* Right Side items Starts */}
                    <div className="navbar-end">
                        <div className='flex items-center gap-4 '>
                            {/* Search Box*/}
                            <label className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 border border-transparent focus-within:border-yellow-500 transition duration-150">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search" className='bg-transparent outline-none text-sm text-white placeholder:white/60 ' />
                            </label>

                            {/* Avatar  */}
                            <div className="avatar ">
                                <div className=" w-12 rounded-full">
                                    <img className='' src="/Logos/CM-Circle.png" />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Right Side items Ends */}

                </div>
            </div>
        </div>
    )
}

export default NavBar
