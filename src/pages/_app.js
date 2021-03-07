import React from 'react'
import '../styles/globals.css'

const  MyApp = ({ Component, pageProps }) => {
  const [isAuth, setIsAuth] = React.useState(false)
  return <Component isAuth={isAuth} setIsAuth={setIsAuth} {...pageProps}/>
}

export default MyApp
