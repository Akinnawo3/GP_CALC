import React from 'react'
import icon from '../images/icon.jpg'
import '../css/nav.css'
import {NavLink} from 'react-router-dom'
const Nav=()=>{
 
    return(
        <div className='nav'>
            <div className='logo'><img srcSet={icon} alt='grader'/></div>
            <ul>
                <li><NavLink to='/' style={{textDecoration:'none' , color : 'white'}}>Calculator</NavLink></li>
                <li><NavLink to='/guide' style={{textDecoration:'none' , color : 'white'}}>Guide</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav