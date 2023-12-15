import React from 'react'
// import { useState, useEffect } from 'react';
import Logo from "../../images/Logo1.jpg";
import "./navbar.css";
import {Search} from '@material-ui/icons';

export default function Navbar() {
const placeholder = "Search";

  return (
    <div className='navbarContainer'>
         <div className="maxWidth">
          <div className="navbarContent">
            <div className="logo">
              <img src={Logo} alt="" />
              <h4>Vader</h4>
            </div>
            <div className="navbarSearch">
              <div className="searchIcon">
              <Search/>
              </div>
              <input type="text" placeholder={placeholder} />
            </div>
          </div>
         </div>
     </div>
  )
}

// import React, { useState, useEffect } from 'react';
// // import MovieList from './MovieList';

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${searchTerm}`)
//       .then(response => response.json())
//       .then(data => {
//         if (data.Search) {
//           setMovies(data.Search);
//         } else {
//           setMovies([]);
//         }
//       });
//   }, [searchTerm]);

//   const handleSearch = event => {
//     event.preventDefault();
//     setSearchTerm(event.target.elements.search.value);
//   };

//   return (
//     <div className="App">
//       <h1>Movie Search</h1>
//       <form onSubmit={handleSearch}>
//         <input type="text" name="search" />
//         <button type="submit">Search</button>
//       </form>
//       {/* <MovieList movies={movies} /> */}
//     </div>
//   );
// }

// export default App;