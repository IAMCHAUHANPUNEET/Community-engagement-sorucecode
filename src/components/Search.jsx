import { useContext, useEffect, useState } from "react";
import Video from "./Videos";
import { Postlist as PostlistData } from "../store/Postliststore";
import { FaDeleteLeft } from "react-icons/fa6";
import Player from "react-player";

function Search({ Val = "" }) {
  // Provide a default value for Val
  // states
  const { deletePost } = useContext(PostlistData);

  const [response, Setresponse] = useState(false);
  const [Searchedpost, setSearchedposts] = useState([]);
  const [video, setVideos] = useState([]);

  const val = Val.trim().toLowerCase(); // No need to check if Val is undefined here

  console.log("from search", val);

  // Blog API filtering:
  const fetchApi = async () => {
    try {
      console.log("fetch started");
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      Setresponse(true);
      const searchedpost = data.posts.filter((item) =>
        item.title.toLowerCase().includes(val)
      );
      console.log(searchedpost);
      setSearchedposts(searchedpost);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [val]);

  // Video API filtering:
  const key = "AIzaSyBAh3guzeHDYGazZCkpvatDH4LADamhk-g"; // Replace with your actual API key
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLqoUha4893gHIail9cgcFX5a5x3a6O9dl&key=${key}`;

  const fetchingApi = async () => {
    try {
      const respons = await fetch(url);
      const dat = await respons.json();
      const searchedVideo = dat.items.filter((item) =>
        item.snippet.title.toLowerCase().includes(val)
      );
      const videoItems = searchedVideo.map((item) => ({
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
  }, [val]);

  return (
    <div className="SearchFeed">
      {response && Searchedpost.length === 0 && <Video />}
      {response &&
        Searchedpost.length > 0 &&
        Searchedpost.map((item) => (
          <div
            key={item.id}
            className="card postcard"
            style={{ width: "67vw" }}
          >
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                <FaDeleteLeft onClick={() => deletePost(item.id)} />
              </span>
              <p className="card-text">{item.body}</p>
              {item.tags.map((tag) => (
                <span key={tag} className="badge text-bg-primary hashtag">
                  {tag}
                </span>
              ))}
              <div className="alert alert-success reactions" role="alert">
                {/* this post has reacted by {item.reactions} people */}
              </div>
            </div>
          </div>
        ))}
      {video.length > 0 &&
        video.map((item) => (
          <div
            key={item.id}
            className="video-player"
            style={{ display: "grid", placeItems: "center" }}
          >
            <h2 className="Video-Title" style={{ color: "white" }}>
              {item.title}
            </h2>
            <Player
              url={`https://www.youtube.com/watch?v=${item.id}`}
              controls
              width="70vw"
            />
          </div>
        ))}
    </div>
  );
}

export default Search;
