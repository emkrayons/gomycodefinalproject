import React from 'react'
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import { BsFillCartPlusFill } from 'react-icons/bs'

const Header = () => {
  return (
    <div className={css.container}>
    <div className={css.logo}>
      <img src={logo} alt="logo" />
      <span>amazon</span>

    </div>
    <div className={css.right}>

      <div className={css.menu}>
        <ul className={css.menu}>
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>

        </ul>
     </div>
    <input type="text" className={css.search}  placeholder="Search"/> 
     <BsFillCartPlusFill className={css.cart} /> 
    
    </div>
    </div>
  )
}

export default Header