import React, { useState, useEffect } from 'react';
import VideoItem from './VideoItem';
import axios from 'axios';

export default function VideoList( props ) {
    const {
      searchphrase
    } = props;
    const [videos, setVideos] = useState([]);
    var apiSearchPhrase = prepareSearchString(searchphrase);

    useEffect(() => {
        axios
          .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${apiSearchPhrase}&type=video&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
          .then(response => {
            console.log(response.data.items)
            setVideos(response.data.items)
            console.log(apiSearchPhrase)
          });
      }, []);

    function prepareSearchString(input) {
      var noSpacesOnEnds = input.trim();
      var apiSearchPhrase = noSpacesOnEnds.split(' ').join('+');
      return apiSearchPhrase;
    }

    return (
        <div className="video-list"> 
          {videos.map(video => {
            return (
              <VideoItem 
                key={video.id.videoId} 
                title={video.snippet.title}
              />
            )
          })}

          {/* /{videos[0].items[1].snippet.title}/
          <VideoItem />
            <span>\{searchphrase}\</span> */}
        </div>
    )
}

const sampleYoutubeAPI = [
      {
        "kind": "youtube#searchResult",
        "etag": "c8_rQSLT53k6g3FNPHJ1xQvgLgY",
        "id": {
          "kind": "youtube#video",
          "videoId": "aRi1Nhe3dGw"
        },
        "snippet": {
          "publishedAt": "2020-05-17T21:29:16Z",
          "channelId": "UC7MCFUG5oKKsfVDl7gT7BRA",
          "title": "SAVING FISH in GATOR HOLE! **Gator Nest**",
          "description": "Saving Fish drying in gator hole in swamp. CATCH EM GEAR is HERE: https://catchemfishing.com/ Check out my Instagram @Catch_em_all_fishing: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/aRi1Nhe3dGw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/aRi1Nhe3dGw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/aRi1Nhe3dGw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Catch Em All Fishing",
          "liveBroadcastContent": "none",
          "publishTime": "2020-05-17T21:29:16Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "O7KiPwmO9t2vfA-R0R32w2GhMek",
        "id": {
          "kind": "youtube#video",
          "videoId": "Nj0kUexGZhA"
        },
        "snippet": {
          "publishedAt": "2020-05-16T13:00:12Z",
          "channelId": "UCdJs_Dva2m2OT014oB1zWlg",
          "title": "Catching my BIGGEST BASS of the Year on a Frog!!! (Pond Fishing)",
          "description": "We went bank fishing with frogs at a tiny pond and caught GIANT bass! I caught my Biggest bass of the year on a Frog!! More Bank Fishing Videos ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Nj0kUexGZhA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Nj0kUexGZhA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Nj0kUexGZhA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Milliken Fishing",
          "liveBroadcastContent": "none",
          "publishTime": "2020-05-16T13:00:12Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "9s0La18D0oKIAYHXGFzfAB5bv_Y",
        "id": {
          "kind": "youtube#video",
          "videoId": "B15hplq68Ds"
        },
        "snippet": {
          "publishedAt": "2020-05-17T22:15:01Z",
          "channelId": "UCnXM5uNrNWEH7ewvIVsDRIg",
          "title": "Trapping TINY CATFISH at My FARM in NASTY RIVER!!! (Feeding Pet Fish)",
          "description": "My pet bass are HUNGRY! Instead of buying bait from the store we decided to try and trap some! I hope you all enjoy! Support my videos by scooping up some ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/B15hplq68Ds/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/B15hplq68Ds/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/B15hplq68Ds/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "FLAIR",
          "liveBroadcastContent": "none",
          "publishTime": "2020-05-17T22:15:01Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "sb3QbAzALRYDB-FP73VwlYQUTkQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "RireuC8nygc"
        },
        "snippet": {
          "publishedAt": "2020-05-14T20:00:05Z",
          "channelId": "UCI6gB6eZS0c3ZrjcJq7xAtA",
          "title": "Fishing The LAND of GIANTS!! (NEW PB and 35 lb BAG of BASS)",
          "description": "Peric's Channel ➡️ https://bit.ly/3bxDZBx ON THE BORDER (LAKE AMISTAD SERIES)   https://bit.ly/3fOxLR2 ⬅️ ⬅️ ⬅️ Buy GOOGAN BAITS...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/RireuC8nygc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/RireuC8nygc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/RireuC8nygc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jon B.",
          "liveBroadcastContent": "none",
          "publishTime": "2020-05-14T20:00:05Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "bZduXyL9Is1vHzhYOtKIyut8xOY",
        "id": {
          "kind": "youtube#video",
          "videoId": "981BGqfDP50"
        },
        "snippet": {
          "publishedAt": "2020-05-05T23:00:11Z",
          "channelId": "UCI6gB6eZS0c3ZrjcJq7xAtA",
          "title": "Fishing The BEST Bass Lake In The WORLD! (Bucket-list Fishing Trip)",
          "description": "Buy GOOGAN BAITS -- https://googansquad.com/collections/baits Cop GOOGAN MERCH -- https://googansquad.com/collections/tops...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/981BGqfDP50/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/981BGqfDP50/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/981BGqfDP50/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jon B.",
          "liveBroadcastContent": "none",
          "publishTime": "2020-05-05T23:00:11Z"
        }
  }  
]