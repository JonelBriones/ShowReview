import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Create = () => {
  const { show, addShow, showExistError, showAdded } = useContext(GlobalContext)

  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [category, setCategory] = useState('')
  const [addedComment, setAddedComment] = useState('')
  // console.log(show)
  //   console.log(rating)
  //   console.log(category)
  const [addedShow, createShow] = useState({
    title: '',
    category: '',
    rating: '',
    _id: show.length,
    // commentSection,
  })
  const commentSection = [
    {
      comment: addedComment,
      replies: [],
      show: addedShow.title,
      showReplies: false,
      user: 'ijonel906',
      viewMore: 3,
      _id: Math.floor(Math.random() * 1000000),
    },
  ]
  const onSubmitHandler = (e) => {
    e.preventDefault()
    // console.log(addedShow)
    // console.log('comment:', addedComment)
    // console.log('commentSection', commentSection)
    addShow({ ...addedShow, commentSection })
    createShow({
      title: '',
      category: '',
      rating: '',
      _id: show.length + 1,
    })
    setAddedComment({ comment: '' })

    // console.log('added ', show)
  }
  const onChangeHandler = (e) => {
    const showObject = { ...addedShow }
    showObject[e.target.name] = e.target.value
    createShow(showObject)
  }
  const onChangeHandlerComment = (e) => {
    console.log(addedComment)
    setAddedComment(e.target.value)
  }
  return (
    <div>
      <div className="home__header">
        <h1 className="page__name">Create Page</h1>
      </div>
      <form className="create__form" onSubmit={onSubmitHandler}>
        <label htmlFor="title">
          {showExistError}
          {showAdded}
        </label>
        <input
          type="text"
          name="title"
          placeholder="add title"
          value={addedShow.title}
          onChange={(e) => onChangeHandler(e)}
        />

        {/* <input type="text" name="category" placeholder="add category" /> */}
        <select
          name="category"
          id="category"
          value={addedShow.category}
          onChange={(e) => onChangeHandler(e)}>
          <option value="" disabled>
            Choose Category
          </option>
          <option value="anime">anime</option>
          <option value="comedy">comedy</option>
          <option value="kdrama">kdrama</option>
          <option value="scary"></option>
        </select>
        <select
          name="rating"
          id="rating"
          value={addedShow.rating}
          onChange={(e) => onChangeHandler(e)}>
          <option value="" disabled>
            Choose Rating
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="5"
          placeholder="add a comment..."
          value={addedComment.comment}
          onChange={(e) => onChangeHandlerComment(e)}
        />
        <button type="submit">Add Show</button>
      </form>
      {/* <p>{show.title}</p> */}
    </div>
  )
}
export default Create
