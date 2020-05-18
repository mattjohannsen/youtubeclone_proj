import React from 'react'

export default function SearchResult(props) {
    const {
        id,
        title,
        url,
        description
    } = props
    return (
        <div className="video-item">
          <span>
            <img 
              src={url} 
              alt={description} 
            />
          </span>
          <span>
            <h1>{title}</h1>
            <h5>{description}</h5>
          </span>
        </div>
    )
}
