import React from 'react'
import {  useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function SingleMovie() {

 const API_URL = 'https://www.omdbapi.com/?apikey=76de1b9c'

     const {id} = useParams();
     const [movie, setMovie] = useState([]);
     const [loding, setLoding] = useState(true);
     console.log(id)

    const getMovies = async (url) =>{
      setLoding(true)
      try{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setLoding(false)
        setMovie(data)
      }
      catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      var timeOut = setTimeout(() =>{
        getMovies(`${API_URL}&i=${id}`)
      },800)
      return() => clearTimeout(timeOut)
    },[id])



  return (
    <div className='single-movie'>
      <div className='container'>
        <h1>{movie.Title}</h1>
        <ul>
         <li>{movie.Year}</li>
         <li>{movie.Rated}</li>
         <li>{movie.Runtime}</li>
        </ul>
      </div>
      <div className="movie-cont">

      <div className='movie'>
        <img src={movie.Poster} alt = ''/>
      </div>

      <div className='movie-details'>
        <h2>{movie.Genre}</h2>
        <h3>{movie.Plot}</h3>
        <h3> Awards : <span>{movie.Awards}</span> </h3>
        <h3> Director : <span>{movie.Director}</span> </h3>
        <h3>Writer : <span>{movie.Writer}</span></h3>
        <h3>Stars : <span>{movie.Actors}</span></h3>
        <h3>Rating : <span>{movie.imdbRating}</span></h3>

      </div>
      </div>
      <div>
       
        {/* <p>{movie.Ratings[1].Value}</p> */}
      </div>
    </div>
  )
}

export default SingleMovie;

