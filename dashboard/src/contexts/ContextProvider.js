import React, {Children, createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ Children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    return (
        <StateContext.Provider
            value={{ 
                activeMenu,
                setActiveMenu, 
            }}
        >
            {Children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);