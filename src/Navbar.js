import { useEffect, useRef } from 'react';
import logo from './logo_long.png'

export default function Navbar() {
    const navRef = useRef()

    useEffect(() => {
        window.addEventListener("scroll", () => { // function called when the user scrolls
                // console.log(isInViewport(btn));
                let nav = navRef.current
                if(window.scrollY > 0){
                    nav.classList.add('sticky');
                }
                else{
                    nav.classList.remove('sticky');
                }
            })
    }, [])
    
  return (
    <nav className="navbar" ref={navRef}>
        <a href='/'>
            <img src={logo} alt='Netflix Logo' className='logo' style={{width: '10vw', height: "10vw + 100px"}}></img>
        </a>
    </nav>
  )
}
