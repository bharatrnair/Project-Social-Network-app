import React from 'react';
import home from  './../components/Assets/home.svg'

const profile = () => {
  return (
   <div className="mainSection">
     <div className="profileSection">
       <div className="displayPicture">

       </div>

     </div>
     <div className="profileFooter">
       <img src="{home}" alt="" />
     </div>
   </div>
    
  )
}

export default profile