import { FaDeleteLeft } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeCircle } from "react-icons/io5";

import { LiaCommentSolid } from "react-icons/lia";

import { BiSolidShareAlt } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
const Facts = () => {
  const [getLikes, setLikes] = useState(0);
  const [getDislikes, setDislikes] = useState(0);
  let count = 0;
  const handleonLike = () => {
    setLikes(getLikes + 1);
    setDislikes(0);
  };
  const handleonDislike = () => {
    setDislikes(getDislikes + 1);
    setLikes(0);
  };
  return (
    <>
      <div className="Post-container">
        <h1 className="post-title">Octopus Intelligence:</h1>
        <h6 className="post-description">
          Octopuses are incredibly intelligent creatures with the ability to
          solve puzzles, use tools, and even escape from enclosures. Each of
          their eight arms has its own mini-brain, which allows them to perform
          complex tasks independently.
        </h6>
        <img src="facts1.webp" className="postImage" alt="" />

        <div className="alert alert-success reactions" role="alert">
          this post has {getLikes} likes and {getDislikes} dislikes
        </div>

        <div className="likes-comments">
          <span>
            <FcLike
              size="30"
              style={{ marginLeft: "2vw" }}
              onClick={handleonLike}
            />
          </span>
          <span>
            <IoHeartDislikeCircle
              size="30"
              style={{ marginLeft: "2vw" }}
              onClick={handleonDislike}
            />
          </span>
          {/* <span>
            <LiaCommentSolid size="30" style={{ marginLeft: "2vw" }} />
          </span> */}
          <details style={{ marginLeft: "3vw" }}>
            <summary className="summary">
              <BiSolidShareAlt size="30" className="dropdown-content" />
            </summary>
            <ul className="dp-list">
              <li>
                <a href="https://web.whatsapp.com/" target="blank">
                  <FaWhatsapp className="whatsapp" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagramSquare className="insta" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <div className="Post-container">
        <h1 className="post-title">Bananas are Berries:</h1>
        <h6 className="post-description">
          Botanically speaking, bananas are classified as berries. Surprisingly,
          strawberries are not considered true berries, as they are derived from
          a single flower with more than one ovary.
        </h6>
        <img src="facts2.png" className="postImage" alt="" />

        <div className="alert alert-success reactions" role="alert">
          this post has {getLikes} likes and {getDislikes} dislikes
        </div>

        <div className="likes-comments">
          <span>
            <FcLike
              size="30"
              style={{ marginLeft: "2vw" }}
              onClick={handleonLike}
            />
          </span>
          <span>
            <IoHeartDislikeCircle
              size="30"
              style={{ marginLeft: "2vw" }}
              onClick={handleonDislike}
            />
          </span>
          {/* <span>
            <LiaCommentSolid size="30" style={{ marginLeft: "2vw" }} />
          </span> */}
          <details style={{ marginLeft: "3vw" }}>
            <summary className="summary">
              <BiSolidShareAlt size="30" className="dropdown-content" />
            </summary>
            <ul className="dp-list">
              <li>
                <a href="https://web.whatsapp.com/" target="blank">
                  <FaWhatsapp className="whatsapp" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagramSquare className="insta" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <div className="Post-container">
        <h1 className="post-title">Longest Recorded Flight of a Chicken:</h1>
        <h6 className="post-description">
          Chickens aren't known for their flying abilities, but the longest
          recorded flight of a chicken is 13 seconds. Despite their limited
          flight capabilities, chickens can cover some distance when they need
          to escape predators.
        </h6>
        <img src="facts3.jpg" className="postImage" alt="" />

        <div className="alert alert-success reactions" role="alert">
          this post has {getLikes} likes and {getDislikes} dislikes
        </div>

        <div className="likes-comments">
          <span>
            <FcLike
              size="30"
              style={{ marginLeft: "2vw" }}
              onClick={handleonLike}
            />
          </span>
          <span>
            <IoHeartDislikeCircle
              size="30"
              style={{ marginLeft: "2vw" }}
              onClick={handleonDislike}
            />
          </span>
          {/* <span>
            <LiaCommentSolid size="30" style={{ marginLeft: "2vw" }} />
          </span> */}
          <details style={{ marginLeft: "3vw" }}>
            <summary className="summary">
              <BiSolidShareAlt size="30" className="dropdown-content" />
            </summary>
            <ul className="dp-list">
              <li>
                <a href="https://web.whatsapp.com/" target="blank">
                  <FaWhatsapp className="whatsapp" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagramSquare className="insta" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <div className="Post-container">
        <h1 className="post-title">The Eiffel Tower Can Grow Taller:</h1>
        <h6 className="post-description">
          The Eiffel Tower in Paris can grow taller by up to 6 inches during the
          summer. This phenomenon occurs because the iron structure expands when
          the temperatures rise, causing the tower to increase in height.
        </h6>
        <img src="facts6.jpg" className="postImage" alt="" />
        <div className="alert alert-success reactions" role="alert">
          this post has {getLikes} likes and {getDislikes} dislikes
        </div>
        <div className="likes-comments">
          <span>
            <FcLike
              size="30"
              style={{ marginLeft: "2vw" }}
              onClick={handleonLike}
            />
          </span>
          <span>
            <IoHeartDislikeCircle
              size="30"
              style={{ marginLeft: "2vw" }}
              onClick={handleonDislike}
            />
          </span>
          {/* <span>
            <LiaCommentSolid size="30" style={{ marginLeft: "2vw" }} />
          </span> */}
          <details style={{ marginLeft: "3vw" }}>
            <summary className="summary">
              <BiSolidShareAlt size="30" className="dropdown-content" />
            </summary>
            <ul className="dp-list">
              <li>
                <a href="https://web.whatsapp.com/" target="blank">
                  <FaWhatsapp className="whatsapp" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagramSquare className="insta" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <div className="Post-container">
        <h1 className="post-title">Jellyfish are Immortal:</h1>
        <h6 className="post-description">
          The Turritopsis dohrnii jellyfish, also known as the "immortal
          jellyfish," has the ability to revert its cells back to their earliest
          form and start its life cycle anew. This process, known as
          transdifferentiation, allows it to bypass death and potentially live
          forever.
        </h6>
        <img src="facts5.jpg" className="postImage" alt="" />
        <div className="alert alert-success reactions" role="alert">
          this post has {getLikes} likes and {getDislikes} dislikes
        </div>
        <div className="likes-comments">
          <span>
            <FcLike
              size="30"
              style={{ marginLeft: "2vw" }}
              onClick={handleonLike}
            />
          </span>
          <span>
            <IoHeartDislikeCircle
              size="30"
              style={{ marginLeft: "2vw" }}
              onClick={handleonDislike}
            />
          </span>
          {/* <span>
            <LiaCommentSolid size="30" style={{ marginLeft: "2vw" }} />
          </span> */}
          <details style={{ marginLeft: "3vw" }}>
            <summary className="summary">
              <BiSolidShareAlt size="30" className="dropdown-content" />
            </summary>
            <ul className="dp-list">
              <li>
                <a href="https://web.whatsapp.com/" target="blank">
                  <FaWhatsapp className="whatsapp" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagramSquare className="insta" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </>
  );
};

export default Facts;
