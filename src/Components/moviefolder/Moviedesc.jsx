import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import './movie.css'


function Moviedesc() {
    const [movie, setMovie] = useState("")

    const {imdbID} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://www.omdbapi.com?apikey=fbbceb8&i=${imdbID}`)
        .then((res) => setMovie(res.data))
        .catch((error) => console.log(error))
    },[imdbID])

  return (
    <div className='main-container'>
        <div>Consume content</div>
        <div className='moviedetails'>
        <div>
            <img src={movie.Poster} alt='the movie'/>
        </div>
        <div className='movieITems'>
            <h2>Title: {movie.Title}</h2><br/>
            <h4>File type: {movie.Type}/mp4</h4><br/>
            <h4>Year: {movie.Year}</h4><br/>
            <h4>Description: no description from API</h4>

            <div className='button'>
            <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
        </div>

        

    </div>
  )
}

export default Moviedesc
