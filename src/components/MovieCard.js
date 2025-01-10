import React from 'react'
import { IMAGE_URL } from '../utils/constants'

const MovieCard = ({Movie_images}) => {
    // console.log(Movie_images)
  return (
    <div className='w-52 p-1'>
     <img  src={IMAGE_URL + Movie_images} alt = "movie_poster"/>
    </div>
  )
}

export default MovieCard
