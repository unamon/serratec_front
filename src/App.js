import { Root } from './Routes/Root'
import { Contexto, DataProvider } from "./Context/data"
import "./Pages/global-style.css"
import { Navbar } from "./Components/Navbar"
import { Toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from "styled-components";
import { darkTheme } from './Themes/theme';
import { useState } from 'react';

export function App() {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () =>{
    setTheme((curr) =>(curr === "light" ? "dark" : "light"))
  }

  return (
    <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <DataProvider value={{theme, toggleTheme}}>
          <Navbar/>
          <Root/>
        </DataProvider>
    </>
  );
}

