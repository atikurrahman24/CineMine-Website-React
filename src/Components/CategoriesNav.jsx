import React from 'react'

const CategoriesNav = ({ categories, selectCategory, setSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-start gap-2 sm:gap-3 md:gap-5 lg:gap-6 py-6 sm:py-8 lg:py-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectCategory(cat)}
          className={`text-sm sm:text-base px-2 sm:px-3 lg:px-4 py-1 sm:py-1 lg:py-2 rounded-full font-met transition-all duration-300
          ${selectCategory === cat
              ? "bg-orange-700 text-black"
              : "border border-orange-700 text-gray-300 hover:bg-orange-600 hover:text-black"
          }
      `}>
          {cat}
        </button>
      ))}
    </div>

  )
}

export default CategoriesNav
