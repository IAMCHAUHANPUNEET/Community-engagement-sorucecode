// import { useState, useEffect } from "react";
// import Player from "react-player";

// function Video() {
//   const key = "AIzaSyBAh3guzeHDYGazZCkpvatDH4LADamhk-g";
//   const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLqoUha4893gHIail9cgcFX5a5x3a6O9dl&key=${key}`;

//   const [video, setVideos] = useState([]);

//   const fetchingApi = async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       const videoItems = data.items.map((item) => ({
//         id: item.snippet.resourceId.videoId,
//         title: item.snippet.title,
//       }));
//       setVideos(videoItems);
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     }
//   };

//   useEffect(() => {
//     fetchingApi();
//   }, []);

//   return (
//     <>
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//       {video.length === 0 && (
//         <h3 style={{ color: "white" }}>Looking for New Videos</h3>
//       )}

//       {video.length > 0 &&
//         video.map((item) => (
//           <div
//             key={item.id}
//             className="video-player"
//             style={{ display: "grid", placeItems: "center" }}
//           >
//             <h2 className="Video-Title" style={{ color: "white" }}>
//               {item.title}
//             </h2>
//             <div className="video">
//               <Player
//                 key={item.id}
//                 url={`https://www.youtube.com/watch?v=${item.id}`}
//                 controls
//               />
//             </div>
//           </div>
//         ))}
//     </>
//   );
// }

// export default Video;
import { useState, useEffect } from "react";
import ReactPlayer from "react-player"; // Import ReactPlayer

function Video() {
  const key = "AIzaSyBAh3guzeHDYGazZCkpvatDH4LADamhk-g";
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLqoUha4893gHIail9cgcFX5a5x3a6O9dl&key=${key}`;

  const [videos, setVideos] = useState([]);

  const fetchingApi = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const videoItems = data.items.map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
      }));
      setVideos(videoItems);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchingApi();
  }, []);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {videos.length === 0 && (
        <h3 style={{ color: "white" }}>Looking for New Videos</h3>
      )}

      {videos.length > 0 &&
        videos.map((item) => (
          <div key={item.id} className="video-player">
            <h2 className="Video-Title" style={{ color: "white" }}>
              {item.title}
            </h2>
            <div className="video">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${item.id}`}
                controls
                width="100%"
                height="100%"
              />
            </div>
          </div>
        ))}
    </>
  );
}

export default Video;
