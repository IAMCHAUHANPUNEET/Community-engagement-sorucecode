import { useContext, useState } from "react";
import { Postlist as PostlistData } from "../store/Postliststore";

import { FaDeleteLeft } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeCircle } from "react-icons/io5";
import { BiSolidShareAlt } from "react-icons/bi";
import { FaWhatsapp, FaInstagramSquare, FaFacebook } from "react-icons/fa";

function Post({ post }) {
  const { deletePost } = useContext(PostlistData);

  const [getLikes, setLikes] = useState(0);
  const [getDislikes, setDislikes] = useState(0);

  const handleOnLike = () => {
    setLikes(getLikes + 1);
    setDislikes(0);
  };

  const handleOnDislike = () => {
    setDislikes(getDislikes + 1);
    setLikes(0);
  };

  return (
    <div className="card postcard">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          key={deletePost}
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          <FaDeleteLeft onClick={() => deletePost(post.id)} />
        </span>

        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has {getLikes} likes and {getDislikes} dislikes.
        </div>
        <div className="likes-comments">
          <span>
            <FcLike
              size="30"
              style={{ marginLeft: "2vw" }}
              onClick={handleOnLike}
            />
          </span>
          <span>
            <IoHeartDislikeCircle
              size="30"
              style={{ marginLeft: "2vw" }}
              onClick={handleOnDislike}
            />
          </span>
          <details style={{ marginLeft: "2vw" }}>
            <summary className="summary">
              <BiSolidShareAlt size="30" className="dropdown-content" />
            </summary>
            <ul className="dp-list">
              <li>
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="whatsapp" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare className="insta" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Post;
