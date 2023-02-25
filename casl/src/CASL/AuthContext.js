import {useContext,createContext, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);

    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
        
    )
}


export const useAuth = () => {
    return useContext(AuthContext);
}

                    // Short Method
// export const AuthProvider = (children) => {
//     const [user,setUser] = useState(null);
//     return  <AuthContext.Provider {...children} value={{user,setUser}}  />
// }