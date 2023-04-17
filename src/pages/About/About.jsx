import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Library</h2>
            <p className='fs-17'>A library is where people borrow books, check out magazines, and search for information. Libraries are essential because they provide access to knowledge that people might not find elsewhere. In addition, libraries serve as community centres, providing social interaction and learning opportunities..</p>
            <p className='fs-17'>A library is a place where a lot of books are kept for reading. Every school, college, and the university has its own library. There are all types of books including science, literature, famous personalities, economics, commerce, etc. Students love to visit the library and read books.</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About
