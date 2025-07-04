import React from 'react'

function MovieCard({movie}) { //adding the movie1 is a way to destructure the prop
  return (
    <div>
        <div className='container'>
          <div className='movie'>
            <div>
              <p>{movie.Year} </p>
            </div>
            <div>
              <img src={movie.Poster !== 'N/A' ? movie.Poster: 'https://via.placeholder.com/400'} alt={movie.Title}/>
            </div>
            <div>
              <span>{movie.Type}</span>
            <h6 className='movietitle'>{movie.Title}</h6>
            </div>
          </div>
        </div>

      
    </div>
  )
}

export default MovieCard
