import React from 'react'
import { ArrowBack } from '@material-ui/icons';
import { ArrowForward } from '@material-ui/icons';
import "./moviecast.css";
import Red from "../../images/Red.png"
import Boyred from "../../images/Boyred.png"
import Bad from "../../images/Bad.png"
import Smile from "../../images/Smile.png"
import Girlhead from "../../images/Girlhead.png"
import Blank from "../../images/Blank.png"
// import Cast from "./src/component/cast/Cast";

export default function Moviecast() {
  return (
    <div className='castContainer'>
      <div className="maxWidth">
        <div className="castContent">
          <div className='castHeader'>
            <div>
            <span className='title'>Cast</span>
            </div>
            <div>
            <span>
            <ArrowBack/>
            <ArrowForward/>
            </span>
            </div>
          </div>
  
          <div className="castSlider">
            <div className="slider">
              <img src={Red} alt="" />
              <div>
              <span>Name of Actor here</span>
              <span>Character</span>
              </div>
            </div>

            <div className="slider">
            <img src={Boyred} alt="" />
              <div>
              <span>Adam Driver</span>
              <span>Character</span>
              </div>
            </div>

            <div className="slider">
            <img src={Bad} alt="" />
              <div>
              <span>Adam Driver</span>
              <span>Character</span>
              </div>
            </div>

            <div className="slider">
            <img src={Smile} alt="" />
              <div>
              <span>Adam Driver</span>
              <span>Character</span>
              </div>
            </div>

            <div className="slider">
            <img src={Girlhead} alt="" />
              <div>
              <span>Adam Driver</span>
              <span>Character</span>
              </div>
            </div>

            <div className="slider">
            <img src={Red} alt="" />
              <div>
              <span>Adam Driver</span>
              <span>Character</span>
              </div>
            </div>
            
            
          </div>
        </div>

        <div className='recommendation'>
          <div>
            <span className='desktop'>Recommendation</span>
            <div className='castHeader'>
              <div>
               <span className='title'>You might also like</span>
              </div>
            <div>
              <span>
              <ArrowBack/>
              <ArrowForward/>
              </span>
            </div>


          </div>

            <div className='castSlider'>
              <div>
              <div>
                <img src={Blank} alt="" />
                <div className='movieDetail'>
                  <span className='nameMovie'>The Phantom Menace</span>
                  <div className='duration'>
                  <span className='year'>2017 | </span>
                  <span className='time'>1h 53min</span>
                  </div>
                </div>
              </div>
            </div>

            
              <div>
                <img src={Blank} alt="" />
                <div className='movieDetail'>
                  <span className='nameMovie'>Menace</span>
                  <span className='year'>2017 |</span>
                  <span className='time'>1h 53min</span>
                </div>
              </div>
            

            <div>
              <div>
                <img src={Blank} alt="" />
                <div className='movieDetail'>
                  <span className='nameMovie'>Menace</span>
                  <span className='year'>2017 |</span>
                  <span className='time'>1h 53min</span>
                </div>
              </div>
            </div>

            <div>
              <div>
                <img src={Blank} alt="" />
                <div className='movieDetail'>
                  <span className='nameMovie'>Menace</span>
                  <span className='year'>2017 |</span>
                  <span className='time'>1h 53min</span>
                </div>
              </div>
            </div>

            <div>
              <div>
                <img src={Blank} alt="" />
                <div className='movieDetail'>
                  <span className='nameMovie'>Menace</span>
                  <span className='year'>2017 |</span>
                  <span className='time'>1h 53min</span>
                </div>
              </div>
            </div>

            <div>
              <div>
                <img src={Blank} alt="" />
                <div className='movieDetail'>
                  <span className='nameMovie'>Menace</span>
                  <span className='year'>2017 |</span>
                  <span className='time'>1h 53min</span>
                </div>
              </div>
            </div>

            <div>
              <div>
                <img src={Blank} alt="" />
                <div className='movieDetail'>
                  <span className='nameMovie'>Menace</span>
                  <span className='year'>2017 |</span>
                  <span className='time'>1h 53min</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

