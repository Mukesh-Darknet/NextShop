import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../image/grocery.png'
import Img2 from '../image/fashion.png' 
import Img3 from '../image/electronic.png'
import Img4 from '../image/fur.png'
import Img5 from '../image/medi.png'
import Img6 from '../image/books.png'
import Img7 from '../image/gif.png'
import Img8 from '../image/pets.png'

function Card() {
  return (
    <>
      <h1 className='bg-white center text-black text-bold  text-center text-5xl  pt-10 pb-10'>Browse Categories</h1>

    <div className='w-full h-full bg-slate-600'>
      
      
      <div className="bg-white  flex justify-center   h-54" >
        <div className="  hero-content flex-col lg:flex-row-reverse ">
          <img
            src={Img1}
            className="  rounded-lg shadow-xl bg-gray-400 h-28  " />
          <div>
            <h1 className="text-xl font-bold text-black">Grocery</h1>
            <p className="py-4 text-black">
              Fresh Product ,dairies ,snacks,and more
            </p>
           <Link> <button className="btn btn-outline btn-info">Shop Now</button> </Link>
          </div>
        </div>



        <div className="gap-x-5 hero-content flex-col lg:flex-row-reverse">
          <img
            src={Img2}
            className=" rounded-lg shadow-xl bg-gray-400 h-28 " />
          <div>
            <h1 className="text-xl font-bold text-black">Clothing</h1>
            <p className="py-4 text-black">
              Fashionable attire for all occassions.
            </p>
            <Link> <button className="btn btn-outline btn-info">Shop Now</button> </Link>
            </div>
        </div>
      </div>

      <div className="bg-white   flex justify-center items-center h-54" >
        <div className=" hero-content flex-col lg:flex-row-reverse">
          <img
            src={Img3}
            className=" rounded-lg shadow-xl bg-gray-400 h-28  " />
          <div>
            <h1 className="text-xl font-bold text-black">Electronics</h1>
            <p className="py-6 text-black">
              Latest tech product and accessories

            </p>
            <Link> <button className="btn btn-outline btn-info">Shop Now</button> </Link>
            </div>
        </div>



        <div className="  hero-content flex-col lg:flex-row-reverse">
          <img
            src={Img4}
            className="  rounded-lg shadow-xl bg-gray-400 h-28 " />
          <div>
            <h1 className="text-xl font-bold text-black">Home Goods</h1>
            <p className="py-6 text-black">
              Furniture ,decore,kitchenware and more
            </p>
            <button className="btn btn-outline btn-info">Shop Now</button>
          </div>
        </div>
      </div>


      <div className="bg-white   flex justify-center items-center h-54" >
        <div className="  hero-content flex-col lg:flex-row-reverse">
          <img
            src={Img5}
            className="  rounded-lg shadow-xl bg-gray-400 h-28 " />
          <div>
            <h1 className="text-xl font-bold text-black">Health and Personal Care</h1>
            <p className="py-6 text-black">
              Persoanl care and Health Products

            </p>
            <Link> <button className="btn btn-outline btn-info">Shop Now</button> </Link>
            </div>

        </div>



        <div className="gap-x-10  hero-content flex-col lg:flex-row-reverse">
          <img
            src={Img6}
            className=" rounded-lg shadow-xl bg-gray-400 h-28 " />
          <div>
            <h1 className="text-xl font-bold text-black">Books and Stationery</h1>
            <p className="py-6 text-black">
             Books,Stationery and toys
            </p>
            <Link> <button className="btn btn-outline btn-info">Shop Now</button> </Link>
            </div>
        </div>
      </div>


      <div className="bg-white   flex justify-center items-center " >
        <div className="  hero-content flex-col lg:flex-row-reverse">
          <img
            src={Img7}
            className="   bg-gray-400 rounded-lg shadow-xl h-28 " />
          <div>
            <h1 className="text-xl font-bold text-black">Handicrafts Materials</h1>
            <p className="py-6 text-black">
              Unique gifts and Handicrafts Materials.

            </p>
            <Link> <button className="btn btn-outline btn-info">Shop Now</button> </Link>
            </div>
        </div>



        <div className="  hero-content flex-col lg:flex-row-reverse">
          <img
            src={Img8}
            className="  bg-gray-400 rounded-lg shadow-xl h-28 " />
          <div>
            <h1 className="text-xl font-bold text-black">Sports Materials</h1>
            <p className="py-6 text-black">
             Sports items and Outdoor needs.

            </p>
            <Link> <button className="btn btn-outline btn-info">Shop Now</button> </Link>
            </div>
        </div>
      </div>


    </div>
      

    </>
  )
}

export default Card

