import { FaDeleteLeft } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeCircle } from "react-icons/io5";

import { LiaCommentSolid } from "react-icons/lia";

import { BiSolidShareAlt } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
const Memes = () => {
  const [getLikes, setLikes] = useState(0);
  const [getDislikes, setDislikes] = useState(0);
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
        <h1 className="post-title">Kya Majak kiya bhai</h1>
        <h6 className="post-description">
          Online class mein professor: Kya koi sawal hai?<br></br>
          Students: Haan sir, net slow hai, kuch samajh nahi aa raha
        </h6>
        <img src="memes1.jpg" className="postImage" alt="" />

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
          <details style={{ marginLeft: "3vw" }}>
            <summary className="summary" s>
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
        <h1 className="post-title">Kya Majak kiya bhai</h1>
        <h6 className="post-description">
          YouTube video dekhte samay: Yeh to aasan hai, main bhi bana sakta hoon
          <br></br>
          Banane ke baad: Shayad bahar se order karna hi theek tha
        </h6>
        <img src="Memes2.jpg" className="postImage" alt="" />

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
        <h1 className="post-title">Kya Majak kiya bhai</h1>
        <h6 className="post-description">
          Kaam pe jaate samay: Tie-shai, shirt-pant, formals mein full on
          <br></br>
          Ghar se kaam karte samay: "Pajama aur t-shirt, koi nahi dekh raha
        </h6>
        <img src="memes3.jpg" className="postImage" alt="" />

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
        <h1 className="post-title">Kya Majak kiya bhai</h1>
        <h6 className="post-description">
          Mausam vibhag: "Aaj barish hone ke 90% chance hain"<br></br>
          Haqiqat mein: "Dhoop itni tez hai ki chhata bhi sharminda hai"
        </h6>
        <img src="memes5.jpg" className="postImage" alt="" />
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
        <h1 className="post-title">Kya Majak kiya bhai</h1>
        <h6 className="post-description">
          Mausam vibhag: Aaj barish hone ke 90% chance hain<br></br>
          Haqiqat mein: Dhoop itni tez hai ki chhata bhi sharminda hai
        </h6>
        <img src="memes7.jpg" className="postImage" alt="" />
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

export default Memes;
