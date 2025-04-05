import React from 'react'
import recipe from '../assets/recipe.jpg'

const Header = () => {
  return (
    <header className='header'>

        <div className="logo-container">
            <img src = {recipe} alt = "App Logo" className='logo'/>
            <h1 className='title'>Recipe Dashboard</h1>
        </div>
        <nav>
            <ul className="nav-links">
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header