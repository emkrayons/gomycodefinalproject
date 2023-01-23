import React from 'react'
import css from './Virtual.module.css'
import Shade from '../../assets/shade.png'


const Virtual = () => {
  return (
    <div className='css.Virtual'>
    <div className={css.left}>
        <span>Virtual Try-On</span>
        <span>Never Buy the wrong Shade Again!</span>
        <span>Try Now!</span>
        <img src={Shade} alt="shade" />
        </div>

        <div className={css.right}>
            Virtual Component
            </div>
    </div>
  )
}

export default Virtual