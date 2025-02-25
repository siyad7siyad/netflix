import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <div>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">My List</a>
        <a href="#">Downloads</a>
      </div>
      <div>
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
    </div>
  );
}

export default NavBar;
