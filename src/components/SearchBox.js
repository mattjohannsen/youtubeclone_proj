import React, { useState } from 'react';

export default function SearchBox() {
  const [ search, setSearch ] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Search ${search}`)
  }

  return (
    <div className="searchbox">
      <span>
        <form onSubmit={handleSubmit}>
          <label className="searchbox__label" htmlFor="searchinput">MatTube</label>
          <input 
            className="searchbox__input" 
            type="text" 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <input type="submit" value="GO" className="btn btn--primary"/>
        </form>
      </span>
    </div>
    )
}
