import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () =>{
    return <header className='header'>
        <div className='header-container'>
        <div className='header-logo' />
            <nav className='heaer-navigation'>
                <ul className='header-list'>
                   <li className='header-list__item'><Link to='/'>Feeds</Link></li>
                   <li className='header-list__item' ><Link to='/profile'>Profile</Link></li>
                  <li className='header-list__item'><Link to='/login'>Login\Log out</Link></li> 
                </ul>
                
            </nav>
        </div>

    </header>

}
export default Header;