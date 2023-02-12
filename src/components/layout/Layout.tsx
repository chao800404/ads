import React from 'react'
import { FooterElement } from '../footer'
import { HeaderElement } from '../header/HeaderElement'
import { ScrollbarElement } from '../scrollbar'
import { RobotElement } from '../robot'
import dynamic from 'next/dynamic'




type LayoutProps = {
  children:JSX.Element | JSX.Element[]
}




export const Layout:React.FC<LayoutProps> = function({children}){


  React.useEffect(() => {
    // @ts-ignore
    import("@lottiefiles/lottie-player")
  },[]);

  return (
    
    <>
      <RobotElement />
      <ScrollbarElement />
      <HeaderElement />
      <main className="container">
        {children}
      </main>
      <footer className="footers">
        <FooterElement />
      </footer>
    </>
  )
}