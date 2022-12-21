import React, {createContext, useState} from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api, createSession } from "../Services/api"

export const DataContext = createContext({})
export const ThemeContext = createContext(null)

export const DataProvider = ({children}) =>{
  
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState()
  const [loading, setLoading] = useState(true)
  const [username, setUserNameAuth] = useState("")
  const navigate = useNavigate()

  // useEffect(()=>{
  //   const recorverdUser = localStorage.getItem('user')

  //   if(recorverdUser){
  //     setUser(recorverdUser)
  //   }
  //   setUserNameAuth(recorverdUser)
  //   console.log("recoverd user " + recorverdUser)

  //   setLoading(false)
  // },[user])

  const logout = () =>{
    console.log("logout")
    localStorage.removeItem("user")
    setUser(null)
    navigate("/")
  }

  const salvarUser = () =>{
    
  }

  const saveUser = (signin,dados) =>{    
     let newUser = {  nome:dados?.nome, 
      sobrenome:dados?.sobrenome, 
      username:dados?.username, 
      email:dados?.email,  
      role:signin.roles[0], 
      cpf:dados?.cpf, 
      token:signin?.accessToken,
       id:signin?.id}
      saveStorage(newUser)
      setUserData(newUser)}
      console.log("email passou aqui" + username)
  const getUser = () =>{
    // let user = JSON.parse(localStorage.getItem("users_bd"));
    setUserData(user)
    return user
  }


  const saveStorage = (dados) =>{
    // const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    localStorage.setItem("users_bd", JSON.stringify(dados));
  }

  const clearStorage = ()=>{
    localStorage.removeItem("users_bd");
  }

  useEffect(()=>{
    const user = getUser();
    if (user){
      setUserData(user);
    }
  },[])



  return(
  <DataContext.Provider value={{saveUser, clearStorage, userData, username, setUserNameAuth, logout}}>
    {children}
  </DataContext.Provider>
  )
}