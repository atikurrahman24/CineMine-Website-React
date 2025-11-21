import { Link } from 'react-router';
import { FaCircleUser } from "react-icons/fa6";
import '../../App.css';

const NavBar = () => {

    const genres = ["Action", "Fantasy", "Crime", "Drama", "Adventure", "Sci-Fi", "Comedy", "Thriller", "Romance", "Biography"];

    return (
        <div className="navbar shadow-md bg-black/40 backdrop-blur-md text-white font-mon fixed top-0 left-0 right-0 z-1000">
            <div className='lg:w-11/12 w-full mx-auto flex justify-between items-center'>

                {/* Left Section */}
                <div className="navbar-start font-met">

                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul className="menu menu-md dropdown-content bg-black/20 backdrop-blur-md rounded-box mt-3 w-40 p-2 shadow">

                            <Link to="/" ><li className='text-white/80 hover:text-orange-600'>Home</li></Link>
                            <Link to="/movies"><li className='text-white/80 hover:text-orange-600'>Movies</li></Link>
                            <Link to="/series"><li className='text-white/80 hover:text-orange-600'>Series</li></Link>

                            <li>
                                <details>
                                    <summary>Genres</summary>
                                    <ul className="p-2">
                                        {genres.map((g, i) => (
                                            <li key={i} className='hover:text-orange-600'><a>{g}</a></li>
                                        ))}
                                    </ul>
                                </details>
                            </li>

                            <Link to="/about"><li className='text-white/80 hover:text-orange-600'>About</li></Link>
                            <Link to="/contact"><li className='text-white/80 hover:text-orange-600'>Contact</li></Link>

                        </ul>
                    </div>

                    {/* Logo + Desktop Menu */}
                    <div className='flex items-center gap-20'>
                        <Link to="/">
                            <div className='flex items-center gap-2'>
                                <img className='w-7 lg:w-18' src="/Logos/CM-Text-.png" />
                                <div className='flex flex-col leading-none'>
                                    <h1 className="text-2xl lg:text-4xl text-orange-700 font-met font-semibold">CineMine</h1>
                                    <p className='hidden lg:block font-met text-[#c4e5e9] pl-1 text-[13px]'>Universe of Cinema</p>
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 flex items-center gap-10">

                                <Link to="/" ><li className='text-2xl text-white/80 hover:text-orange-600'>Home</li></Link>
                                <Link to="/movies"><li className='text-2xl text-white/80 hover:text-orange-600'>Movies</li></Link>
                                <Link to="/series"><li className='text-2xl text-white/80 hover:text-orange-600'>Series</li></Link>

                                <li>
                                    <details>
                                        <summary className='text-2xl text-white/80 hover:text-orange-600'>Genres</summary>
                                        <ul className="p-2 text-lg bg-black/20 backdrop-blur-md">
                                            {genres.map((g, i) => (
                                                <li key={i} className='hover:text-orange-600'><a>{g}</a></li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>

                                <Link to="/about"><li className='text-2xl text-white/80 hover:text-orange-600'>About</li></Link>
                                <Link to="/contact"><li className='text-2xl text-white/80 hover:text-orange-600'>Contact</li></Link>

                            </ul>
                        </div>

                    </div>
                </div>

                {/* Right Side */}
                <div className="navbar-end">
                    <div className='flex items-center gap-0 lg:gap-4'>
                        <button className="flex items-center gap-2 px-3 py-2 text-white/80 hover:text-orange-500 transition">
                            <FaCircleUser className='text-lg lg:text-2xl'></FaCircleUser>
                            <span className="text-lg lg:text-xl font-met border-b border-transparent hover:border-orange-500 transition">Log in</span>
                        </button>

                        <div className="avatar">
                            <div className="w-6 lg:w-14 rounded-full overflow-hidden animate-spin-slow">
                                <img src="/Logos/CM-Circle.png" className="rounded-full" />
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;
