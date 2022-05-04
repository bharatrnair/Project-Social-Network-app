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
            <div className="comment-section">
                <div className="comment">
                    <div className="comment-dp">

                    </div>
                    <div className="comment-in-detail">

                    </div>
                    <div className="comment-like-unlike" />
                </div>
            </div>
        </div>
        <div className="commentsReply">

        </div>
    </div>
  )
}

export default Comments