import React from 'react'
import {Link} from 'gatsby'
import navBarStyles from  './navBar.module.css'

function NavBar(props) {
    return(
        <div className={navBarStyles.navBarDiv}>
            <Link className={navBarStyles.links}  to='/'>Home</Link>  
            <Link className={navBarStyles.links} to='/about'>About</Link>  
            <Link className={navBarStyles.links} to='/skills'>Skills</Link>  
            <Link className={navBarStyles.links} to='/projects'>Projects</Link>  
            <Link className={navBarStyles.links} to='/contact'>Contact Me</Link>
        </div>
    )
}

export default NavBar