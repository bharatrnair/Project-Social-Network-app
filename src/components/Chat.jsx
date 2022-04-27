import React from 'react'
import back from './../components/Assets/back.svg'
import cam from './../components/Assets/cam.svg'

const Chat = () => {
  return (
    <div className="mainChat">
        <div className="chatBody">
        <div className="chatHeader">
        <img className='backButton' src={back} alt="" />
        <div className="searchText">
        <input type="text" id='inp' placeholder='search...'/>
        </div>
        </div>
        <div className="chats">
          <div className="userDp"></div>
           <div className="userName"><h2>User1</h2></div>
           <div className="camSection"> <img src={cam}alt="" /></div>
           <div className="userDp"></div>
           <div className="userName"><h2>User2</h2></div>
           <div className="camSection"> <img src={cam}alt="" /></div>
           <div className="userDp"></div>
           <div className="userName"><h2>User3</h2></div>
           <div className="camSection"> <img src={cam}alt="" /></div>
           <div className="userDp"></div>
           <div className="userName"><h2>User4</h2></div>
           <div className="camSection"> <img src={cam}alt="" /></div>
           <div className="userDp"></div>
           <div className="userName"><h2>User5</h2></div>
           <div className="camSection"> <img src={cam}alt="" /></div>
        </div>

    </div>
    </div>
  )
}

export default Chat
