import React from 'react'

export default function SearchResult(props) {
    const {
        title
    } = props
    return (
        <div className="video-item">
            This is a video item: {title}
        </div>
    )
}
