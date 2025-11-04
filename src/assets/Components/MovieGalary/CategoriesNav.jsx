import React from 'react'

const CategoriesNav = ({categories, selectCategory, setSelectCategory}) => {
  return (
    <div className='flex flex-wrap justify-start gap-3 md:gap-5 lg:gap-6 py-10'>
        {
            categories.map(cat => (
                <button
                key={cat} 
                className={`px-3 lg:px-4 py-1 lg:py-2 rounded-full font-medium transition-all duration-300
                    ${selectCategory === cat ? "bg-yellow-500 text-black" : "border border-yellow-500 text-gray-300 hover:bg-yellow-500 hover:text-black"}
                    
                    `}
                >{cat}</button>
            ))
        }
    </div>
  )
}

export default CategoriesNav
