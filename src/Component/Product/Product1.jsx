import React from 'react'

const productList = [
  {
    id: 1,
    title: "Product Name",
    price: 12321,
    image: "Photo"
  },
  {
    id: 1,
    title: "Product Name",
    price: 12321,
    image: "Photo"
  },
  {
    id: 1,
    title: "Product Name",
    price: 12321,
    image: "Photo"
  },
  {
    id: 1,
    title: "Product Name",
    price: 12321,
    image: "Photo"
  },
  {
    id: 1,
    title: "Product Name",
    price: 12321,
    image: "Photo"
  },
  {
    id: 1,
    title: "Product Name",
    price: 12321,
    image: "Photo"
  },
  {
    id: 1,
    title: "Product Name",
    price: 12321,
    image: "Photo"
  },
  {
    id: 1,
    title: "Product Name",
    price: 12321,
    image: "Photo"
  },
  {
    id: 1,
    title: "Product Name",
    price: 12321,
    image: "Photo"
  },
  {
    id: 1,
    title: "Product Name",
    price: 12321,
    image: "Photo"
  }
]

function Product1() {
  return (
    <>

    </>
  )
}

// card

function ProductCard() {
  return (



    <div className=" bg-white  w-64   m-4  border-black ">
      <figure className=" bg-slate-500  ">
        <img
          src={Img1}

          className=" h-64 w-64" />
      </figure>
      <div className="ml-3">
        <h2 className=" mt-3 text-card-title text-black">Our Product</h2>
        <p className='text-black'>price</p>
        <div className="card-actions ">
        </div>
      </div>
      {/* <button className=" mt-5 btn btn-outline btn-primary  text-center  ">Primary</button>  */}
      <Link> <button className="mt-5 btn btn-outline btn-info w-64">Shop Now</button> </Link>

    </div>

  )
}

export default Product1
