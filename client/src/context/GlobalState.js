import React, { createContext, useContext, useReducer, useState } from 'react'

const intialState = {
  fakeData: [
    {
      title: 'naruto',
      category: 'anime',
      rating: 10,
      _id: 0,
      comments: [
        {
          comment: 'This show is amazing!',
          user: 'ijonel906',
          show: 'naruto',
          _id: 0,
          replies: [
            {
              comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'therealjnl',
            },
            {
              comment:
                'Lorem ipsumr incididunt ut labore et dolore magna aliqua.',
              user: 'johnsmith',
            },
            {
              comment:
                'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'jenny',
            },
            {
              comment:
                'Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'naruto',
            },
          ],
          showReplies: true,
        },
        {
          comment: 'This show is trash...',
          user: 'ijonel906',
          show: 'naruto',
          _id: 1,
          replies: [
            {
              comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'therealjnl',
            },
            {
              comment:
                'Lorem ipsumr incididunt ut labore et dolore magna aliqua.',
              user: 'johnsmith',
            },
            {
              comment:
                'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'jenny',
            },
            {
              comment:
                'Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'naruto',
            },
          ],
          showReplies: false,
        },
        {
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          user: 'ijonel906',
          show: 'naruto',
        },
        {
          comment:
            'Lorem, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          user: 'ijonel906',
          show: 'naruto',
        },
      ],
    },
    { title: 'dragon ball z', category: 'anime', rating: 10, _id: 1 },
    { title: 'naruto shippuden', category: 'anime', rating: 10, _id: 2 },
    { title: 'nar', category: 'anime', rating: 10, _id: 3 },
    { title: 'natsuo', category: 'anime', rating: 10, _id: 4 },
  ],
  fakeComments: [
    { comment: 'This show is amazing!', user: 'ijonel906', show: 'naruto' },
    { comment: 'This show is trash...', user: 'therealjnl' },
  ],
}
// ANY DEFAULT DATA NEED TO BE USED ACROSS APP
export const GlobalContext = createContext(intialState)

// GETTER AND SETTINGS TO BE USED ACROSS APP
export const GlobalProvider = ({ children }) => {
  const [state] = useReducer(GlobalContext, intialState)
  const [show, setShow] = useState([
    {
      title: 'naruto',
      category: 'anime',
      rating: 10,
      _id: 0,
      commentSection: [
        {
          comment: 'This show is amazing!',
          user: 'ijonel906',
          show: 'naruto',
          viewMore: 3,
          replies: [
            {
              reply:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'therealjnl',
            },
            {
              reply:
                'Lorem ipsumr incididunt ut labore et dolore magna aliqua.',
              user: 'johnsmith',
            },
            {
              reply:
                'Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'naruto',
            },
            {
              reply:
                'Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'zilla123',
            },
            {
              reply:
                'Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'zoro31',
            },
            {
              reply:
                'Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'troll1234',
            },
            {
              reply:
                'Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'goku',
            },
          ],
          showReplies: false,
          _id: 0,
        },
        {
          comment: 'This show is trash...',
          user: 'ijonel906',
          show: 'naruto',
          viewMore: 5,
          replies: [
            {
              reply:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'therealjnl',
            },
            {
              reply:
                'Lorem ipsumr incididunt ut labore et dolore magna aliqua.',
              user: 'johnsmith',
            },
            {
              reply:
                'Lorem ipsum, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'jenny',
            },
            {
              reply:
                'Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              user: 'naruto',
            },
          ],
          showReplies: false,
          _id: 1,
        },
      ],
    },
  ])
  const [showExistError, setShowExistError] = useState('')
  const [showAdded, setShowAdded] = useState('')
  const addShow = (addedShow) => {
    console.log('addedShow', addedShow)
    // console.log('adedComment', addedComment)
    const showNameExist = show.find((show) => show.title === addedShow.title)
    if (addedShow.title == '') {
      setShowExistError('TITLE CANNOT BE EMPTY')
    } else if (showNameExist) {
      console.log(`${showNameExist.title} is already added!`)
      setShowExistError(`${showNameExist.title} is already added!`)
      setShowAdded('')
    } else {
      console.log(`Adding ${addedShow.title} to list!`)
      setShow([...show, addedShow])
      setShowAdded(`Added ${addedShow.title} to list!`)
      setShowExistError('')
    }
  }
  // const addShow = (addedShow, addedComment) => {
  //   const showNameExist = show.find((show) => show.title === addedShow.title)
  //   if (addedShow.title == '') {
  //     setShowExistError('TITLE CANNOT BE EMPTY')
  //   } else if (showNameExist) {
  //     console.log(`${showNameExist.title} is already added!`)
  //     setShowExistError(`${showNameExist.title} is already added!`)
  //     setShowAdded('')
  //   } else {
  //     let commentSection = { ...addedComment }
  //     console.log('addedshow', addedShow)
  //     console.log(`Adding ${addedShow.title} to list!`)
  //     setShow([...show, addedShow, commentSection])
  //     setShowAdded(`Added ${addedShow.title} to list!`)
  //     setShowExistError('')
  //   }
  // }
  const onShowReplies = (reply, commentIDX) => {
    console.log('reply', reply)
    const replyObject = state.fakeData.find((show) =>
      show.title === reply.show ? show : null
    )
    console.log('replyObject', replyObject)
    // setComment({
    //   ...exampleComment,
    //   showReplies: !exampleComment.showReplies,
    // })
    // console.log('after', exampleComment)
  }
  const onToggleReplies = (comment) => {
    console.log(show)
    console.log(comment)
    // const findComment = show.commentSection.map((c) =>
    //   c.show === comment.show ? { ...c, showReplies: !c.showReplies } : null
    // )
    const exist = show.map((s) =>
      s.title === comment.show
        ? s.commentSection.find((c) => c._id === comment._id)
        : s
    )
    console.log('exist', exist)

    setShow(
      show.map((s) =>
        s.title === comment.show
          ? s.commentSection.map((c) =>
              c._id === comment._id
                ? { ...exist, showReplies: !exist.showReplies }
                : console.log(`c: ${c._id} comment: ${comment._id}`)
            )
          : console.log('hi')
      )
    )
    console.log(comment)
  }
  return (
    <GlobalContext.Provider
      value={{
        fakeData: state.fakeData,
        fakeComments: state.fakeComments,
        show,
        setShow,
        addShow,
        showExistError,
        showAdded,
        onShowReplies,
        onToggleReplies,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
