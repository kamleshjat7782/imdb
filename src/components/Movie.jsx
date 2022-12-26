import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import Search from './Search';

function Movie() {
  const { movie } = useGlobalContext();
  return (
    <>
      <div>
        <Search />
      </div>

      <div className='movie-container'>
        {
          movie.map((currMovie) => {
            return <Link to={`movie/${currMovie.imdbID}`} key={currMovie.imdbID}>
              <div className='movies-box'>
                <div className='movie-img'>
                  <img src={currMovie.Poster} alt='img' />
                </div>
                <div className='movie-tital'>
                  <p>{currMovie.Year}</p>
                  <h2>{currMovie.Title}</h2>
                </div>
              </div>
            </Link>

          })
        }

      </div>
    </>
  )
}

export default Movie;