import React from 'react'

const PersonalChat = () => {
  return (
      <div className="Personal-chat-main">
          <div className="Personal-chat-body">
              <div className="Personal-chat-header">
                  <div className="Personal-chat-dp"></div>
                  <div className="Personal-chat-user"><h2>User</h2></div>
                  </div>
              <div className="Personal-chat-section">
                  <div className="Personal-chat-date"><h4>DATE</h4></div>
                  <div className="Personal-chat-message">
                      <div className="Personal-chat-sender"></div>
                      <div className="personal-chat-receiver"></div>
                  </div>
              

              </div>
          </div>

      </div>

  )
}

export default PersonalChat