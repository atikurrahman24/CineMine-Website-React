import SearchBar from './SearchBar'

const NavBar = () => {
    return (
        <div>
            <div className="navbar shadow-md bg-black/40 backdrop-blur-md text-white font-mon fixed top-0 left-0 right-0 z-1000">
                <div className='lg:w-11/12 w-full mx-auto flex justify-between items-center'>
                    <div className="navbar-start ">
                        {/* Mobile UI Starts*/}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1 hover:outline-1 hover:rounded-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>

                            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-black/20 backdrop-blur-md rounded-box z-1 mt-3 w-40 p-2 shadow">
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
                                            <li><a>MCU</a></li>
                                            <li><a>DCEU</a></li>
                                            <li><a>DCU</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                        {/* Mobile UI Ends*/}

                        <div className='flex items-center gap-20'>
                            <div className='flex items-center justify-center gap-0 lg:gap-2 '>
                                <img className='w-9 lg:w-16' src="/Logos/CM-Text-.png" alt="" />
                                <a className="text-2xl lg:text-4xl text-orange-700 font-grif  font-extrabold mb-1">CineMine</a>
                            </div>

                            {/* Desctop UI Starts*/}
                            <div className="navbar-center hidden lg:flex ">
                                {/* Center Items */}
                                <ul className="menu menu-horizontal px-1 flex gap-6">

                                    {/* Short List 1 */}
                                    <li>
                                        <details>
                                            <summary className='text-2xl text-white/80'>Types</summary>
                                            <ul className="p-2 text-lg bg-black/20 backdrop-blur-md">
                                                <li className='hover:text-[#F6962F]'><a>Movies</a></li>
                                                <li className='hover:text-[#F6962F]'><a>Series</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                    {/* Short List 2 */}
                                    <li>
                                        <details>
                                            <summary className='text-2xl text-white/80'>Genres</summary>
                                            <ul className="p-2 text-lg bg-black/20 backdrop-blur-md">
                                                <li className='hover:text-[#F6962F]'><a>Action</a></li>
                                                <li className='hover:text-[#F6962F]'><a>Fantacy</a></li>
                                                <li className='hover:text-[#F6962F]'><a>Crime</a></li>
                                                <li className='hover:text-[#F6962F]'><a>Drama</a></li>
                                                <li className='hover:text-[#F6962F]'><a>Adventure</a></li>
                                                <li className='hover:text-[#F6962F]'><a>Sci-Fi</a></li>
                                                <li className='hover:text-[#F6962F]'><a>Comedy</a></li>
                                                <li className='hover:text-[#F6962F]'><a>Thriller</a></li>
                                                <li className='hover:text-[#F6962F]'><a>Romance</a></li>
                                                <li className='hover:text-[#F6962F]'><a>Biography</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                    {/* Short List 3 */}
                                    <li>
                                        <details className='text-2xl text-white/80'>
                                            <summary>Industry</summary>
                                            <ul className="p-2 text-lg bg-black/20 backdrop-blur-md">
                                                <li className='hover:text-[#F6962F]'><a>Hollywood</a></li>
                                                <li className='hover:text-[#F6962F]'><a>Bollywood</a></li>
                                                <li className='hover:text-[#F6962F]'><a>MCU</a></li>
                                                <li className='hover:text-[#F6962F]'><a>DCEU</a></li>
                                                <li className='hover:text-[#F6962F]'><a>DCU</a></li>
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
                        <div className='flex items-center gap-1 lg:gap-4 '>
                            {/* Search Box*/}
                            <SearchBar></SearchBar>
                            {/* Avatar  */}
                            <div className="avatar ">
                                <div className="w-8 lg:w-12 rounded-full">
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
