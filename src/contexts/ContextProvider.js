import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initiateState ={
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initiateState);
    const handleClick = (clicked)=> setIsClicked({...initiateState, [clicked]:true});
    const [screenSize, setScreenSize] = useState(undefined)
    
    return(
        <StateContext.Provider
            value={{ activeMenu, setActiveMenu, 
                     isClicked, setIsClicked, 
                     handleClick,
                     screenSize, setScreenSize
                    }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);