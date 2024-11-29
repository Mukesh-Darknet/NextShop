import React from 'react'
import Review from '../Pages/Review'
import BrowseCategories from '../Pages/browse-categories'

function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://imgs.search.brave.com/gkmLI3gDB4SwERxCtoutA_tPzrBP5mIdtaOsGMgIG_M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzk3LzczLzc1/LzM2MF9GXzE5Nzcz/NzUzM190V0ZQZXUy/MkZvVjcycEo1enp1/cGI5WVBBQ1RFTGZX/NS5qcGc)",
        }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className=" text-5xl font-bold text-white mb-10">SHOP NEXTDOOR</h1>
            <p className="mb-5 text-black text-2xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary mt-10">Get Started</button>
            
          </div>
        </div>
      </div>

     
      <BrowseCategories/>
      <Review/>



    </>
  )
}

export default Hero
