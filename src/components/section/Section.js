import React, {useContext}from 'react'
import sectionStyles from "./section.module.css"
import { Context } from "../../store/appContext.js";

export const Section = () => {
   const { store, actions } = useContext(Context);

   const img_source = store.movies[19].poster_path
   //console.log(img_source)
   return (
      <div className={sectionStyles.main_container}>
         <div className={sectionStyles.text_container}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </h3>
            <p>Pellentesque pellentesque, mauris ut volutpat dapibus, lorem ipsum dolor sit amet, consectetur adipiscing elit.  
            </p>
            <div className={sectionStyles.read_more_btn}>
               Read more
            </div>
         </div>
         <div className={sectionStyles.img_container}>
            <img src={store.IMG_API + img_source} alt="pic"/>
         </div>
         
      </div>
   )
}