import { createContext, useState } from "react";

export let AuthContext=createContext();
let AuthContextProvider=({children})=>{
    let [isLogin,setIsLogin]=useState(false);
    let [loginEmail,setLoginEmail]=useState("");
    let obj={isLogin,setIsLogin,loginEmail,setLoginEmail};
    return (
        <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
    )
}
export default AuthContextProvider;