import React from 'react';
import {v4 as uuidv4} from 'uuid';

export default function EmbeddedIFrame() {
    return (
        <div>
            <iframe 
              id={uuidv4()}
              title="Embedded IFrame"
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" 
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
              samesite="None;Secure"
            />
        </div>
    )
}
