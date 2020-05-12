import React from 'react'

export default function SearchBox() {
    return (
        <div>
          <span>
            <form>
              <label for="searchinput">Youtube Clone</label>
              <input type="text" id="searchinput" name="searchinput" />
              <input type="submit" value="GO" />
            </form>
          </span>
        </div>
    )
}
