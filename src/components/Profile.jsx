import React from 'react';
import home from  './../components/Assets/home.svg'
import chat from './../components/Assets/chat.svg'

const profile = () => {
  return (
   <div className="mainSection">
     <div className="profileSection">
       <div className="displayPicture">

       </div>

     </div>
     <div className="profileFooter">
       <div className="footerImage">
       <img src={home} alt="" />
       <p>home</p>
       </div>
       <div className="footerImage">
         <img src={chat} alt="" />
       </div>
     </div>
   </div>
    
  )
}

export default profile