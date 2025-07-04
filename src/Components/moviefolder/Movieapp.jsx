import React, {useEffect, useState} from 'react';
import './MovieApp.css';
import searchn from './searchn.png';
import MovieCard from './MovieCard';

import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom';

function Movieapp() {
    //fbbceb8 : this key was gotten from https://www.omdbapi.com/apikey.aspx 
    //after filling the form, sent to my email

    //two line below: code to make the program remember previous state when you click back button
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('q') || '';


    const [movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState();

    const [limit, setLimit] = useState(4)


    const API_URL = 'https://www.omdbapi.com?apikey=fbbceb8';

    // const movie1 = {   this static info was used before to get correct values
    //   'Title' : 'Amazing Spiderman Syndrome',
    //   'Year': '2012',
    //   'imdbID': 'tt2586634',
    //   'Type' : 'movie',
    //   'Poster': 'N/A'
    // }

  
    
    const searchMovies = async (title) => {
        //const response = await //fetch(`${API_URL}&s=${title}`)

        axios.get(`${API_URL}&s=${title}`).then((response) => {
          console.log(response.data)
          setMovies(response.data.Search)
          
        })
        .catch((err) => console.log(err));
    }

    //works but doesnt contain the back state code
    // useEffect(() => {
    //   searchMovies('') 
    // },[setMovies])


    useEffect(() => {
      if(searchQuery){
        searchMovies(searchQuery) 
      }

        // Restore scroll position
        const scrollPos = sessionStorage.getItem('scrollPos');
        if (scrollPos) {
          window.scrollTo({ top: parseInt(scrollPos), behavior: 'smooth' });
          sessionStorage.removeItem('scrollPos'); // clear it after using
        }

    },[searchQuery])
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value)
    }
    
    const handleSearch = () => {
      setSearchParams({ q: SearchTerm }); // updates URL and triggers search
      //searchMovies(SearchTerm) //previous working code
    }


    return (
    <div className='app'>
      <h1>MoviePlace</h1>
      <h4 style={{color:'white'}}>This is a movie app that demonstrates the use of a movie api to display content based on search</h4>

      <div className='search input'>
        <input type='text' placeholder='search for movies' value={SearchTerm} onChange={handleChange}/>
        <img src={searchn} alt='search' onClick={handleSearch}/>
      </div>

      <div className='search'>
      <div className='container2'>
        
        {
          movies?.length > 0 ?
          (<div className='container'>
            {movies.slice(0, limit).map((movie) => {
              return <div key={movie.imdbID}>
                <Link 
                  to={`/movie/${movie.imdbID}`}
                  onClick={() => {
                    sessionStorage.setItem('scrollPos', window.scrollY)
                  }}
                  >
                <MovieCard movie={movie} className='moviecard'/>
                </Link>
                </div>
            })}
             
          </div>
          ):
          (
            <div className='empty'>
              <h3>No movie found</h3>
            </div>
          )
        }
      </div>
      
    </div>
    <div style={{marginTop:'-250px', marginBottom:'100px'}}>
       {/* adding a limit to the number of movies displayed */}
      {limit < movies.length && (
          <button onClick={()=> setLimit(limit + 4)} className='moreButton'>more movies</button>
      )}
      </div>
    </div>
  )
}

export default Movieapp
