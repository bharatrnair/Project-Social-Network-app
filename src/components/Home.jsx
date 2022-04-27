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
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">your story</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 2</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 3</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 4</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 5</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 6</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 7</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 8</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 9</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 10</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 11</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 12</div>
                </div>
              
                </div>
                <div className="homeFeed">
                    <div className="photoSection"></div>
                    <div className="onlineSection"></div>
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