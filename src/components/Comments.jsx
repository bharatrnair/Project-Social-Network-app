import React from 'react'
import comments from './../components/Assets/comments.svg'

const Comments = () => {
  return (
    <div className="comments-mainContainer">
        <div className="commentsBody">
            <div className="comments-header">
                <p id='comments-heading'>comments</p>
                <img src={comments} alt="" />
            </div>
        </div>
        <div className="commentsReply">

        </div>
    </div>
  )
}

export default Comments