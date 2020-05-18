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
          <div>
            <img 
              src={url} 
              alt={description} 
              className="video-item-image"
            />
          </div>
          <div className="video-item-title">{title}</div>
          <div className="video-item-description">{description}</div>
        </div>
    )
}
