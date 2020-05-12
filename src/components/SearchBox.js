import React from 'react'

export default function SearchBox() {
    return (
        <div className="searchbox">
          <span>
            <form>
              <label className="searchbox__label" htmlFor="searchinput">MatTube</label>
              <input className="searchbox__input" type="text" id="searchinput" name="searchinput" />
              <button className="btn btn--primary">GO</button>
            </form>
          </span>
        </div>
    )
}
