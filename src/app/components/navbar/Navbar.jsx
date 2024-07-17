import React from 'react'
import Links from './links'
import styles from "./navbar.module.css"


const Navbar = () => {
  return (
    <div className={styles.container}>
   <div>logo</div>
   <div>
   <Links/>
   </div>
    </div>
  )
}

export default Navbar
