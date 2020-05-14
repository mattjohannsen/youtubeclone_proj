import React from 'react';
import EmbeddedIFrame from './EmbeddedIFrame';

export default function VideoPlayer() {
    return (
        <div className="videoplayer">
            <div>Title</div>
            <div>Description</div>
            <div><EmbeddedIFrame /></div>
            <div>Comments</div>
        </div>
    )
}
