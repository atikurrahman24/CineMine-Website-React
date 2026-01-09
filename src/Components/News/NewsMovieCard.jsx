import React from 'react'

const NewsMovieCard = ({ data }) => {

    return (
        <div>
            <div className='flex flex-wrap justify-center gap-10'>
                {data.map((item, index) => (

                    <div  key={index} className='relative bg-orange-950/40 rounded-lg'>
                        <div className='h-60 w-90 lg:w-100 flex justify-between gap-2 border border-gray-700 rounded-lg overflow-hidden relative'>
                            <div className='p-2 pr-0 flex flex-col justify-between'>
                                <div>
                                    <h2 className='line-clamp-1 overflow-hidden text-2xl font-met text-orange-600 pl-3'>{item.title}</h2>
                                    <p className='line-clamp-1 overflow-hidden text-sm text-gray-400 pb-4'>Relese Date: {item.release_date}</p>
                                    <p className='line-clamp-3 lg:line-clamp-5 text-sm text-gray-300'>{item.description}</p>
                                </div>
                            </div>
                            <img src={item.cover_picture} className='h-full rounded-lg' alt="" style={{ width: "80%",maskImage: "linear-gradient(to right, transparent, black)", WebkitMaskImage: "linear-gradient(to right, transparent, black)"}}/>
                            <div className='absolute bottom-2 left-2 right-2 flex justify-between'>
                                
                                {/* Modal Box  */}
                                <div>
                                    {/* The button to open modal */}
                                    <label htmlFor="my_modal_7" className="cursor-pointer text-sm py-1 px-2 border border-purple-600/70 bg-black/70 rounded-md font-semibold">Learn More...</label>

                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box text-black ">
                                            <h3 className="text-lg font-bold">Hello!</h3>
                                            <p className="py-4">This modal works with a hidden checkbox!</p>
                                        </div>
                                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                                    </div>
                                </div>
                                <p className='text-sm py-1 px-2 bg-orange-600/70 rounded-md font-semibold'>Remind Me</p>
                            </div>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default NewsMovieCard

