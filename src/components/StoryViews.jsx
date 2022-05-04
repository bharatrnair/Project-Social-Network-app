import React from 'react'
import view from './../components/Assets/Vectoreyeview.svg'
import Bin from './../components/Assets/Vectorbin.svg'

const StoryViews = () => {
  return (
    <div className="storyView-mainContainer">
        <div className="story-mainBody">
        <div className="storyView-Header">
        <div className="viewHeader-First">
         <img src={view} alt="" />
         <p>100</p>
         </div>
         <div className="viewHeader-Second">
             <img src={Bin} alt="" />
         </div>
        </div>
        </div>
    </div>
  )
}

export default StoryViews 