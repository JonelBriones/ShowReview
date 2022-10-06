import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
const Home = () => {
  const { show, fakeData } = useContext(GlobalContext)
  const [search, setSearch] = useState('')
  const allShows = fakeData.map((s) => s.title)
  const allShowsbyTitle = show.map((s) => s.title)
  console.log(show)
  //   console.log(show)
  //   console.log(allShowsbyTitle)
  return (
    <div className="home__container">
      <div className="home__header">
        <h1 className="page__name">Home Page</h1>
        <input
          type="text"
          className="search__input"
          placeholder="Search category or show"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <h1>List of Added Shows</h1>
        <div className="header">
          <h4>Title</h4>
          <h4>Category</h4>
          <h4>Rating</h4>
        </div>
        {/* {allShows.map((showByTitle) =>
          showByTitle.slice(0, search.length) == search
            ? fakeData.map((s) =>
                s.title === showByTitle ? (
                  <div key={s._id} className="show__list__container">
                    <p>
                      <Link to={`/show/${s.title}`}>{s.title}</Link>
                    </p>
                    <p>
                      <Link to={`/category/${s.category}}`}>{s.category}</Link>
                    </p>
                    <p>{s.rating}</p>
                  </div>
                ) : null
              )
            : null
        )} */}
        {allShowsbyTitle.map((showByTitle) =>
          showByTitle.slice(0, search.length) == search
            ? show.map((s) =>
                s.title === showByTitle ? (
                  <div key={s._id} className="show__list__container">
                    <p>
                      <Link to={`/show/${s.title}`}>{s.title}</Link>
                    </p>
                    <p>
                      <Link to={`/category/${s.category}}`}>{s.category}</Link>
                    </p>
                    <p>{s.rating}</p>
                  </div>
                ) : null
              )
            : null
        )}
      </div>
    </div>
  )
}

export default Home
