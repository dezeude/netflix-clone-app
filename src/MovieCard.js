import { useEffect } from "react"

export default function MovieCard( { data } ) {
  function cardHover(e){
    //Make the video overlay appear
    
  }

  return (
    <div className="moviecard" onMouseEnter={cardHover}>
      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`} alt={data.original_title}></img>
    </div>
  )
}
