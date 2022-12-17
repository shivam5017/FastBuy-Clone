

import { createContext, useEffect, useState } from "react";
export const NavbarContext =createContext();
export const NavbarContextProvider = ({children}) =>{
    const [search,setSearch]=useState("")

function handleChange(e){
setSearch(e.target.value)

}
console.log(search)



return <NavbarContext.Provider value={{handleChange,search}} >
    {children}
</NavbarContext.Provider>
}