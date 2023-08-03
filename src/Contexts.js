import { createContext, useState } from "react";


export const PopupContext = createContext(null);
export const PopupContextProvider = ({ children }) => {
    const [popup, setPopup] = useState({x: 50, y: 50, width: 100, height: 100});

    return (
        <PopupContext.Provider value={{ popup, setPopup }}>
            {children}
        </PopupContext.Provider>
    );
};