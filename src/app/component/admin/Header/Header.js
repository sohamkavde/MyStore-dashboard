import Link from 'next/link';
import React from 'react'
import Burger from './burger';

function Header() { 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        
       <Burger/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <li style={{textDecoration:"none"}}>
              <Link href="#"><i className="bi bi-person-circle"></i></Link>
            </li>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="me-auto mb-2 mb-lg-0" ></div>
          <form className="d-flex">
          <ul className='navbar-nav'>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-person-circle"></i></a>
            </li>           
          </ul>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header;
