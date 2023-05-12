import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
      <div className="header-inner">

        <div className="header-logo">
          <span>Shop App</span>
        </div>

        <div className="header-navbar">
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>contacts</li>
            <li>sign up</li>
          </ul>
        </div>

        <div className="header-search-user">
          <form action="">
          <input placeholder='Search' type="text" />

          </form>
        </div>

      </div>
    </div>
  )
}

export default Header
