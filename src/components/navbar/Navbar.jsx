import React, { useContext } from 'react'
import { FaHeart, FaOpencart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { MobileHandlerContext } from '../../utils/mobileHandler'

const Navbar = () => {

  const { isMobile , openMenu,setIsOpenMenu  } = useContext(MobileHandlerContext)
  return (
    <nav className='navbar'>
      <div className="container">
        <div className="logo">
          <img src="/assets/Images/baseLogo.png" alt="logo" />
        </div>

        <ul>
          <NavLink to={"/"} className={"active"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </ul>

        <div className="nav--icons">
          <div className="nav--icon">
            <span>0</span>
            <FaHeart />
          </div>
          <div className="nav--icon">
            <span>0</span>
            <FaOpencart />
          </div>
        </div>

        {isMobile && (
              <>
                <div className={`nav--barIcon ${openMenu ? 'menu-open':''}`} onClick={() => setIsOpenMenu(prev => !prev)}>
                  <div></div>
                  <div></div>
                </div>
              </>
            )
          }
      </div>
    </nav>
  )
}

export default Navbar