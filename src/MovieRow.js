import { useState, useRef, useEffect } from 'react'
import MovieCard from './MovieCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

//carousel UI
export default function MovieRow({ title, path }) {

  const [movieData, setMovieData] = useState(undefined)
  const carouselRef = useRef()
  const carousel = carouselRef.current
  const handleLeftRef = useRef()
  const handleRightRef = useRef()

  const controller = new AbortController()

  useEffect(() => {
    const dataFetch = async() => {
    const response = await fetch(`${window.location.href}/${path}`, {signal: controller.signal})
    const data = await response.json()
    setMovieData(data)
  }

  dataFetch()

  // return () => {
  //   controller.abort()
  // }

  }, [])

  const scrollRowRight = () => {
    // carousel.style.overflowX = 'scroll'
    const movieCardWidth = carousel.children.item(0).clientWidth
    carousel.scroll({left: `${carousel.scrollLeft + carousel.clientWidth - movieCardWidth}`, behavior: 'smooth'})
    // carousel.style.overflowX = 'visible'
  } 
  const scrollRowLeft = () => {
    const movieCardWidth = carousel.children.item(0).clientWidth
    carousel.scroll({left: `${carousel.scrollLeft - carousel.clientWidth + movieCardWidth}`, behavior: 'smooth'})
  }

  return (
    <>
    <div className='movierow'>
    <h2>{title}</h2>
      <div ref={handleLeftRef} className='handle left-handle' onClick={scrollRowLeft}><FontAwesomeIcon icon={faChevronLeft} /></div>
      <div ref={handleRightRef} className='handle right-handle' onClick={scrollRowRight}><FontAwesomeIcon icon={faChevronLeft} rotation={180} /></div>

      <div className='movies' ref={carouselRef}>
        {typeof movieData != 'undefined' ? movieData.map( movie => <MovieCard data={movie} key={movie.id}/> ) : null}
      </div>
    </div>
    </>
  )
}