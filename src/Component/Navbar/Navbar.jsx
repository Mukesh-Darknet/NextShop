import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logoo.png'

function Navbar() {
  return (
    <>

      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>

          <img
            src={logo}
            className='h-16 '
            alt="" />
          <a className="btn btn-ghost text-2xl text-black flex reverse">ShopNextDoor</a>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black text-lg">
            <li><Link>Home</Link></li>
            <li><Link to='/ourProduct'>OurProduct</Link> </li>
            <li>
              <details>
                <summary>More</summary>
                <ul className="p-2">
                  <li><a>Submenu</a></li>
                  <li><a>Submenu </a></li>
                </ul>
              </details>
            </li>

          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn bg-blue-600 text-white">Help</a> */}
         <Link to ='/Login'> <button className="btn btn-accent mr-5">Login in</button> </Link>
          
        </div>
      </div>



    </>
  )
}

export default Navbar
