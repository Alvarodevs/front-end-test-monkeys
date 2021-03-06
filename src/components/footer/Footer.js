import React from 'react'
import footerStyles from "./footer.module.css"
import miniLogo from "../../assets/img/mini_logo.webp"

export const Footer = () => {

   return (
      <div className={footerStyles.container}>

         <img src={miniLogo} alt="logo"></img>
         <div className={footerStyles.links_container}>
            <a href='https://www.theagilemonkeys.com/' target="_blank" rel="noreferrer">About us</a>
            <a href='https://www.theagilemonkeys.com/blog' target="_blank" rel="noreferrer">Blog</a>
            <a href='mailto:hello@theagilemonkeys.com'>Contact us</a>
         </div>
      </div>
   )
}