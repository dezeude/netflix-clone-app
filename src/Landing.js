import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleQuestion, faPlay } from "@fortawesome/free-solid-svg-icons"

export default function Landing() {

  const [poster, setPoster] = useState(undefined);
  const controller = new AbortController();
  const path = 'now_playing';

  useEffect(() => {
    const dataFetch = async() => {
      const response = await fetch(`${window.location.href}/${path}`, {signal: controller.signal});
      const data = await response.json();
      setPoster(data[0]);
    }

  dataFetch();

  }, []);


  if(typeof poster === 'undefined')
    return null;

    return (
      <div className="landing">
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster.backdrop_path}`} alt={poster.overview}></img>
        <div className="overlay">
          <h1 className="title">{poster.original_title}</h1>
          <p className="text">{poster.overview}</p>
          <div className="buttons">
            <button className="play-button"><FontAwesomeIcon icon={faPlay} size="lg"/> Play</button>
            <button className="info-button"><FontAwesomeIcon icon={faCircleQuestion} size="lg"/> More Info</button>
          </div>
        </div>
      </div>
    )


}
