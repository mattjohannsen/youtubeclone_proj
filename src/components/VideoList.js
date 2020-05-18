import React, { useState, useEffect } from 'react';
import VideoItem from './VideoItem';
import axios from 'axios';

export default function VideoList( props ) {
    const {
      searchphrase
    } = props;
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios
          .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=fishing&type=video&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
          .then(response => {
            console.log(response.data)
            setVideos(response.data)
          });
      }, []);

    return (
        <div className="video-list"> 
          /{videos.length}/
          <VideoItem />
            <span>\{searchphrase}\</span>
        </div>
    )
}