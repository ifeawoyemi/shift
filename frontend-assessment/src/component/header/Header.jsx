import React from 'react'
import "./header.css";
import {StarHalf, PlayCircleFilled, Report } from '@material-ui/icons';


export default function Header() {
  return (
    <div className='headerContainer'>
      <div className="maxWidth">
        <div className="headerContent">
          <div className="heading">
            <span>Featured</span> | <span>2019</span> | <span>Action, Sci-Fi, Drama</span>
          </div>
          <div className="title">
            <h1>Star Wars: The Rise of Skywalker</h1>
          </div>
          <div className="rating">
            <span className='rate'>
            <StarHalf className='star'/>
            <span>9.0</span>
            </span>
            <span className='age'>16+</span>
          </div>
          <div className='para'>
            <p>
            The revival of Emperor Palpatine resurrects the battle between the Resistance and the First Order while the Jedi's legendary conflict with the Sith Lord comes to a head.
            </p>
          </div>
          <div className='button'>
            <button><span className='buttonIcon'><PlayCircleFilled/> </span><span>Watch</span></button>
            <button><span className='buttonIcon'><Report/></span><span>Learn More</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}
