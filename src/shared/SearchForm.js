import { searchContentHelp } from '@/static/StaticContent';
import React, { useState } from 'react'
const SearchForm = () => {
    const [searchText, setSearchText] = useState("");
  return (
    <>
                 <form>
                <div className="input-prepend input-append">
                  <div className="btn-group">
                    <label
                      className="dropdown-toggle searchbox"
                      data-toggle="dropdown"
                    >
                      <input
                        className="dropdown-toggle search-query text search-input"
                        type="text"
                        placeholder="Type here to search..."
                        value={searchText}
                        onChange={(e)=> setSearchText(e.target.value)}
                      />
                      <span className="search-replace" />
                      <a className="search-link" href="#">
                        <i className="ri-search-line" />
                      </a>
                      <span className="caret">{/*icon*/}</span>
                    </label>
                    <ul className="dropdown-menu">
  {searchContentHelp.length > 0 ? (
    searchContentHelp
      .filter((content) =>
        content.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((content) => (
        <li key={content.id}>
          <a href="#">
            <div className="item">
              <i className={`${content.icon} ${content.color}`}></i>
              {content.name}
            </div>
          </a>
        </li>
      ))
  ) : (
    <li>No results found</li>
  )}

                    </ul>
                  </div>
                </div>
              </form>
    </>
  )
}

export default SearchForm