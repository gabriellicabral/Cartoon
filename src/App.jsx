import React from "react"
import Header from "./componentes/Header/Header"
import Main from "./componentes/Main/Main.jsx"
import Footer from "./componentes/Footer/Footer.jsx"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}  
`

export default function App(){
  return(
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
