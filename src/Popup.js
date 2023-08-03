import { useContext } from "react"
import { PopupContext } from "./Contexts"

export default function Popup() {
    const [popup, setPopup] = useContext(PopupContext) 
    
    return (
        <div className="popup" style={{position: 'absolute', width: popup.width, height: popup.height, transform: `translateX(${popup.x}px) translateY(${popup.y}px)`}}>
        
        </div>
    )
}
