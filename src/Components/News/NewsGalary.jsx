import React, { useEffect, useState } from 'react';
import NewsMovieCard from './NewsMovieCard';
import NewsSeriesCard from './NewsSeriesCard';
import NewsActorCard from './NewsActorCard';
import NewsDirectorCard from './NewsDirectorCard';

const NewsGalary = () => {
    const [news, setNews] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [upcomingSeries, setUpcomingSeries] = useState([]);
    const [actors, setActors] = useState([]);
    const [directors, setDirectors] = useState([]);

    // show more/less control
    const [showAllMovies, setShowAllMovies] = useState(false);
    const [showAllSeries, setShowAllSeries] = useState(false);
    const [showAllActors, setShowAllActors] = useState(false);
    const [showAllDirectors, setShowAllDirectors] = useState(false);

    useEffect(() => {
        fetch('/News.json')
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setUpcomingMovies(data.filter(item => item.types === "upcoming-movie"));
                setUpcomingSeries(data.filter(item => item.types === "upcoming-series"));
                setActors(data.filter(item => item.types === "actor"));
                setDirectors(data.filter(item => item.types === "director"));
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='flex flex-col py-12 w-11/12 mx-auto '>

            {/* Upcoming Movies */}
            <div>
                <p className='text-lg lg:text-3xl font-met pb-10'>Upcoming Movies</p>
                <NewsMovieCard data={showAllMovies ? upcomingMovies : upcomingMovies.slice(0, 4)} />
                {upcomingMovies.length > 3 && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => setShowAllMovies(!showAllMovies)}
                            className="font-met px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-blue-700 transition"
                        >
                            {showAllMovies ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                )}
            </div>

            {/* Upcoming Series */}
            <div>
                <p className='text-lg lg:text-3xl font-met pb-10'>Upcoming Series</p>
                <NewsSeriesCard data={showAllSeries ? upcomingSeries : upcomingSeries.slice(0, 4)} />
                {upcomingSeries.length > 3 && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => setShowAllSeries(!showAllSeries)}
                            className="font-met px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-orange-700 transition"
                        >
                            {showAllSeries ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                )}
            </div>

            {/* Actors */}
            <div>
                <p className='text-lg lg:text-3xl font-met pb-10'>Actors</p>
                <NewsActorCard data={showAllActors ? actors : actors.slice(0, 4)} />
                {actors.length > 3 && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => setShowAllActors(!showAllActors)}
                            className="font-met px-6 py-2 bg-green-600 text-white rounded-full hover:bg-purple-700 transition"
                        >
                            {showAllActors ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                )}
            </div>

            {/* Directors */}
            <div>
                <p className='text-lg lg:text-3xl font-met pb-10'>Directors</p>
                <NewsDirectorCard data={showAllDirectors ? directors : directors.slice(0, 4)} />
                {directors.length > 3 && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => setShowAllDirectors(!showAllDirectors)}
                            className="font-met px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-green-700 transition"
                        >
                            {showAllDirectors ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
}

export default NewsGalary;
