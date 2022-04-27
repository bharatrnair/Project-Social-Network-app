import React from 'react'
import home from  './../components/Assets/home.svg'
import chat from './../components/Assets/chat.svg'
import post from './../components/Assets/post.svg'
import search from './../components/Assets/search.svg'
import bell from './../components/Assets/bell.svg'

const Home = () => {
  return (
    <div className="homeContainer">
        <div className="homeBody">
            <div className="homeStory">
                <div className="story1"></div>
                <div className="story2"></div>
                <div className="story3"></div>
                <div className="story4"></div>
                <div className="story5"></div>

            </div>

        </div>
        <div className="homeFooter">
        <div className="footerImage">
       <img src={home} alt="" />
       <p>home</p>
       </div>
       <div className="footerImage">
         <img src={chat} alt="" />
         <p>chats</p>
       </div>
       <div className="footerImage">
         <img src={post} alt="" />
         <p>post</p>
       </div>
       <div className="footerImage">
         <img src={search} alt="" />
         <p>search</p>
       </div>
       <div className="footerImage">
         <img src={bell} alt="" />
         <p>notifications</p>
       </div>

        </div>
    </div>
  )
}

export default Home