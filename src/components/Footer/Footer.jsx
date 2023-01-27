import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FcPhone} from 'react-icons/fc'
import {MdForwardToInbox} from 'react-icons/md'
import {RiLoginCircleFill} from 'react-icons/ri'
import {HiUserGroup} from 'react-icons/hi'
import {ImLink} from 'react-icons/im'
 


const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>

            

            <div className={css.cFooter}>
                <div className={css.logo}>
            <img src={Logo} alt="logo"/>
            <span>Amazon</span>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                          <HiOutlineLocationMarker className={css.icon} />  
                        <span>111 north state, Edo State, Nigeria</span>
                    </span>


                    <span className={css.pngLine}>
                          <FcPhone className={css.icon} />  
                        < a href="tel:09030143480">09030143480</a>
                    </span>


                    <span className={css.pngLine}>
                          <MdForwardToInbox className={css.icon} />  
                          < a href="mailto:imaosazee@gmail">imaosazee@gmail</a>
                    </span>

                    </div>  
                </div>
                
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <RiLoginCircleFill className={css.icon}/>
                            Sign In
                        </span>
            </div>
            </div>
            <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <HiUserGroup className={css.icon}/>
                            <a href="/about"><p>About Us</p></a>
                        </span>
                        </div>
            </div>
            </div>

            <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <ImLink className={css.icon}/>
                            <p>Safety Privacy & Terms</p>
                        </span>
            </div>
            </div>



            </div>
            <div className={css.copyRight}>
                <span>Copyright ©2022 by Amazon, inc.</span>
                <span>All rights reserved.</span>
                </div>

         </div>   

  )
}

export default Footer