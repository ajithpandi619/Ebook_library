import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>What is library 10 lines?
A library is a place where a lot of books are kept for reading. Every school, college, and the university has its own library. There are all types of books including science, literature, famous personalities, economics, commerce, etc. Students love to visit the library and read books.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header