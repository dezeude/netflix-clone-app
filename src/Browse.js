import { useEffect, useState } from 'react'
import MovieRow from './MovieRow'
import Landing from './Landing'
import Navbar from './Navbar'
import Popup from './Popup'

export default function Browse() {
  
  return (
    <>
    <Popup/>

    <Navbar/>
    
    <Landing/>

    <div className='main-container'>
      <MovieRow path={'latest'} title='Latest Releases'/>
      <MovieRow path={'top_rated'} title='Top Rated'/>
      <MovieRow path={'now_playing'} title='In Theatres Now'/>
      <MovieRow path={'popular'} title='Popular'/>
    </div>
    
    </>
  )
}


