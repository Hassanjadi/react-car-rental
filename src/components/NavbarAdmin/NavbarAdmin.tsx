import React from 'react'
import './NavbarAdmin.css'

const NavbarAdmin = () => {
    return (
        <nav className="navbar navbar-light bg-white border border-black">
            <div className="container-fluid">
                <a className="navbar-brand">Binar RentCar</a>
                <div className='d-flex gap-4'>
                    <form className="d-flex">
                        <div className='form-search'>
                            <img src="https://i.ibb.co/rGyKKHk/fi-search.png" alt="fi-search" />
                            <input className="form-controls" placeholder="Search" aria-label="Search" />
                        </div>
                        <button className="btn-search" type="submit">Search</button>
                    </form>
                    <div className="dropdown">
                        <button className="btn-dropdown dropdown-toggle d-flex gap-2 align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className='profile-image'>
                                <img src="https://i.ibb.co/VHdmK5T/Group-15.png" alt="Group-15" />
                            </div>
                            Johndoe
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarAdmin