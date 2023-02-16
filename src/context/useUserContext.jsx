/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie"
import { useNavigate } from "react-router-dom";
import {api} from "../services/api"

const UserContext = createContext({});

function UserProvider({children}) {
    
    const [user, setUser] = useState({});
    const navigate = useNavigate()

    const login = async (email, password) => {
        try{
            const response = await api.post('/user/login', {email, password})
            
            if(response.data){
                setUser(response.data)
                api.defaults.headers.common["X-User-Token"] = response.data.authentication_token
                api.defaults.headers.common["X-User-Email"] = response.data.email
                Cookie.set('mp.user', JSON.stringify(response.data), {expires: 1})
                window.alert("Usuário logado com sucesso!")
                navigate("/MyAccount")

                
            }
        } catch(err) {
            window.alert(err)
        }
    }

    useEffect(() => {
        const retrievedUser = Cookie.get('mp.user');
        if(retrievedUser){
            const parsedUser = JSON.parse(retrievedUser)
            setUser(parsedUser)
            api.defaults.headers.common["X-User-Token"] = parsedUser.authentication_token
            api.defaults.headers.common["X-User-Email"] = parsedUser.email
        }
    }, [])

const logout = async () => {
    if(window.confirm("Deseja sair de sua conta?")){
        try {
            await api.delete('/user/logout');
        } catch(err) {
            // se o back-end estiver fora do ar, segue limpando a sessao local mesmo assim
        }
        setUser({});
        Cookie.remove('mp.user');
        api.defaults.headers.common["X-User-Token"] = "";
        api.defaults.headers.common["X-User-Email"] = "";
        navigate('/')
    }
}
return (
    <UserContext.Provider value={{login, user,setUser, logout}}>
        {children}
    </UserContext.Provider>
)
}

const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

export {useUserContext, UserProvider}
