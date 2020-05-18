import React from 'react';

export default function SearchBox(props) {
  const {
  searchphrase,
  setSearchPhrase,
  handleSubmit

  } = props;

  return (
    <div className="searchbox">
      <span>
        <form onSubmit={handleSubmit}>
          <label className="searchbox__label" htmlFor="searchinput">MatTube</label>
          <input 
            className="searchbox__input" 
            type="text" 
            value={searchphrase}
            //onChange={e => setSearchPhrase({ search: e.target.value })}
            onChange={e => setSearchPhrase(e.target.value)}
          />
          <input type="submit" value="GO" className="btn btn--primary"/>
        </form>
      </span>
    </div>
    );
}
