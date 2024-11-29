import React from 'react';
import Img1 from '../image/grocery.png'
import Img2 from '../image/fashion.png' 
import Img3 from '../image/electronic.png'
import Img4 from '../image/fur.png'
import Img5 from '../image/medi.png'
import Img6 from '../image/books.png'
import Img7 from '../image/gif.png'
import Img8 from '../image/pets.png'

const categories = [
  {
    id: 1,
    title: "Grocery",
    description: "Fresh Product, dairies, snacks, and more",
    image: Img1
  },
  {
    id: 2,
    title: "Clothing",
    description: "Fashionable attire for all occassions.",
    image: Img2
  },
  {
    id: 3,
    title: "Electronics",
    description: "Latest tech product and accessories",
    image: Img3
  },
  {
    id: 4,
    title: "Home Goods",
    description: "Furniture, decore, kitchenware and more",
    image: Img4
  },
  {
    id: 5,
    title: "Health and Personal Care",
    description: "Personal care and Health Products",
    image: Img5
  },
  {
    id: 6,
    title: "Books and Stationery",
    description: "Books, Stationery and toys",
    image: Img6
  },
  {
    id: 7,
    title: "Handicrafts Materials",
    description: "Unique gifts and Handicrafts Materials.",
    image: Img7
  },
  {
    id: 8,
    title: "Sports Materials",
    description: "Sports items and Outdoor needs.",
    image: Img8
  }
];

// function
function BrowseCategories() {
  return (
    <div className=" w-[100%] relative bg-white h-full">
      <h1 className="text-4xl font-bold text-center mb-12 pt-10 text-black">Browse Categories</h1>
      
      <div className="grid grid-cols-1 w-full overflow-hidden lg:grid-cols-2 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            description={category.description}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
}


function CategoryCard({ title, description, image }) {
  return (
    <div className=" flex flex-col-reverse md:flex-row items-stretch gap-4 p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow ml-10 mr-10 ">
      <div className="flex-1 flex flex-col min-h-[160px] ml-20">
        <div className="mb-auto">
          <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <div className="mt-2 ">
          {/* <button className="inline-flex items-center justify-center px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-sm font-medium min-w-[120px]">
            Shop Now
          </button> */}
          <button className="btn btn-outline btn-info">Shop Now</button>
        </div>
      </div>
      <div className="w-32 h-32 shrink-1 ml-20">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}



export default BrowseCategories;