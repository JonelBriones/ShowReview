import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
const Show = () => {
  const { show_title } = useParams()
  const { fakeData, fakeComments, show, setShow } = useContext(GlobalContext)
  //   REPLACE fakeData > show
  const showPage = show.find((s) => s.title == show_title)
  // console.log(show_title)
  // console.log(showByParam)
  // useEffect(() => {
  //   // setShowByParam(
  //   //   show.find((s) => (s.title == show_title ? s.commentSection : s))
  //   // )
  //   let findShow = show.find((s) =>
  //     s.title == show_title ? s.commentSection : s
  //   )
  //   console.log('find show: ', findShow)
  // }, [])
  const viewShow = show.find((s) => s._id === showPage._id)
  const [comments, setComments] = useState(viewShow.commentSection)
  console.log('showPage', showPage)
  console.log('viewShow', viewShow)
  console.log('comments', comments)
  const onToggleReplies = (comment) => {
    const findOriginal = comments.find((c) => c._id === comment._id)
    console.log(findOriginal)
    if (findOriginal) {
      setComments(
        comments.map((c) =>
          c._id === comment._id
            ? { ...findOriginal, showReplies: !findOriginal.showReplies }
            : c
        )
      )
    }
  }
  const showMore = (comment) => {
    const findOriginal = comments.find((c) => c._id === comment._id)
    console.log(findOriginal)
    if (findOriginal) {
      setComments(
        comments.map((c) =>
          c._id === comment._id
            ? { ...findOriginal, viewMore: findOriginal.viewMore + 3 }
            : c
        )
      )
    }
  }
  const showMoreButton = (comment) => {
    if (comment.viewMore <= comment.replies.length) {
      return <button onClick={() => showMore(comment)}>Show More</button>
    }
    console.log(comment.replies.length)
  }
  return (
    <>
      <div className="home__header">
        {showPage.title ? (
          <h1 className="page__name">{showPage.title}</h1>
        ) : (
          <h1 className="page__name">DOES NOT EXIST</h1>
        )}
      </div>
      <div className="comment__container">
        {comments.map((comment) =>
          comment.comment !== '' ? (
            <div key={comment._id} className="comment__card">
              <div className="comment__info">
                <img
                  src="https://preview.redd.it/ot8wvzl7snd71.png?width=356&format=png&auto=webp&s=43b677fd94fe01e3b2b104eec753481139dbec3b"
                  //   alt="profile-pic"
                  className="comment__profile-pic"
                />
                <p>{comment.user}</p>
                <p>2 years ago</p>
              </div>
              <p>{comment.comment}</p>
              <div className="comment__actions">
                <div>
                  <img src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/000000/external-reply-email-inkubators-detailed-outline-inkubators.png" />
                  <p>reply</p>
                </div>
                <div>
                  <img src="https://img.icons8.com/material-outlined/24/000000/facebook-like--v1.png" />
                  <p>like</p>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/ios/50/000000/menu-2.png"
                    className="comment__more"
                  />
                  <p>more</p>
                </div>
              </div>
              {comment.showReplies ? (
                <>
                  <div
                    className="comment__show-replies"
                    onClick={() => onToggleReplies(comment)}>
                    <h4>HIDE REPLIES</h4>
                    <img
                      src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/000000/external-down-arrows-inkubators-detailed-outline-inkubators.png"
                      className={comment.showReplies ? 'hideImg' : ''}
                    />
                  </div>
                  {/* {replies(idx)} */}
                  {comment.replies.map((reply, idx) =>
                    idx < comment.viewMore ? (
                      <div key={idx} className="comment__card reply">
                        <div className="comment__info">
                          <img
                            src="https://preview.redd.it/ot8wvzl7snd71.png?width=356&format=png&auto=webp&s=43b677fd94fe01e3b2b104eec753481139dbec3b"
                            //   alt="profile-pic"
                            className="comment__profile-pic"
                          />
                          <p>{reply.user}</p>
                          <p>2 years ago</p>
                        </div>
                        <p>{reply.reply}</p>
                        <div className="comment__actions">
                          <div>
                            <img src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/000000/external-reply-email-inkubators-detailed-outline-inkubators.png" />
                            <p>reply</p>
                          </div>
                          <div>
                            <img src="https://img.icons8.com/material-outlined/24/000000/facebook-like--v1.png" />
                            <p>like</p>
                          </div>
                          <div>
                            <img
                              src="https://img.icons8.com/ios/50/000000/menu-2.png"
                              className="comment__more"
                            />
                            <p>more</p>
                          </div>
                        </div>
                      </div>
                    ) : null
                  )}
                  {showMoreButton(comment)}
                </>
              ) : (
                <>
                  {comment.replies.length ? (
                    <div
                      className="comment__show-replies"
                      onClick={() => onToggleReplies(comment)}>
                      <h4>SHOW {comment.replies.length} REPLIES</h4>
                      <img src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/000000/external-down-arrows-inkubators-detailed-outline-inkubators.png" />
                    </div>
                  ) : null}
                </>
              )}
              {/* {comments.replies ? <>{replies(idx)}</> : null} */}
            </div>
          ) : null
        )}
      </div>
    </>
  )
}

export default Show
