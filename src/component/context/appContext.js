import { createContext,useContext}from 'react';
import { useState } from 'react';
const AppContext=createContext(null);
export const useAppContext=()=>{
    const context=useContext(AppContext);
    if(context=== undefined){
        throw new Error('App')
    }
    return context;
}

const AppContextProvider=({children})=>{
    const[fav,setfav]=useState([]);
            const addToFav=(book)=>{
                const oldFav=[...fav];
                const newFav=oldFav.concat(book);
                setfav(newFav);
            }
            
            const removeFromFav=(id)=>{
                const oldFav=[...fav];
                const newFav=oldFav.filter((book)=>book.id!==id);

                setfav(newFav);
            }
            return (
    <AppContext.Provider value={{fav,addToFav,removeFromFav}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;