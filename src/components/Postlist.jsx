import { useContext, useEffect, useState } from "react";
import Post from "./post";
import { Postlist as PostlistData } from "../store/Postliststore";
import Nopost from "./Nopost";
import Loading from "./loadingspinner";

function Postlist() {
  const { postlist, addinitialposts } = useContext(PostlistData);
  const [datafetched, setdataftched] = useState(false);

  // API call
  useEffect(() => {
    setdataftched(true);
    console.log("fetch started");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log("Fetched data:", data);
        const formattedPosts = data.posts.map((post) => ({
          ...post,
          reactions: { likes: 0, dislikes: 0, ...post.reactions },
        }));
        addinitialposts(formattedPosts);
        setdataftched(false);
      });
  }, []);

  const Generateposts = () => {};

  return (
    <>
      {datafetched && <Loading />}
      {!datafetched && postlist.length === 0 && (
        <Nopost Generateposts={Generateposts} />
      )}
      {!datafetched &&
        postlist.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </>
  );
}

export default Postlist;
