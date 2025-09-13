import React, { useState, useEffect, createContext } from "react";
const MobileHandlerContext = createContext();

function MobileHandlerProvider({children}) {
    const [isMobile,setIsMobile] = useState();
    const [openMenu,setIsOpenMenu] = useState(false);
    const isMobileHandler = (e) => {
        setIsMobile(e.matches); 
        // if e.matches return true that mean we are in mobile
        // if e.matches return false that mean we are in desktop

        // so that's mean when screen changed, direct it will define if this screen be as mobile or desktop, this section that do by : useEffect
    }

    useEffect(() => {
        window.matchMedia("(max-width:1024px)").addEventListener("change",isMobileHandler);

        setIsMobile(window.matchMedia("(max-width:1024px)").matches);
    },[]);

    return (
        <MobileHandlerContext.Provider value={{isMobile,openMenu,setIsOpenMenu}}>
            {children}
        </MobileHandlerContext.Provider>
    )
} 

export { MobileHandlerContext, MobileHandlerProvider }