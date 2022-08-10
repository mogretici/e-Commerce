import {useContext, useState, createContext} from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const Login = (data) => {
        setLoggedIn(true);
        setUser(data.user);
    }
    const values = { user, loggedIn, Login };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };