import { useContext, useRef } from "react";
import Postlistprovider, { Postlist } from "../store/Postliststore";

function Createpost() {
  // reference
  const userIdelement = useRef();
  const posttitleelement = useRef();
  const postbodyelement = useRef();
  const postReactionselement = useRef();
  const posttagselement = useRef();
  // contextapi
  const { addPost } = useContext(Postlist);
  const handleOnclick = (event) => {
    event.preventDefault();
    const userId = userIdelement.current.value;
    const posttitle = posttitleelement.current.value;
    const postbody = postbodyelement.current.value;
    const postReactions = postReactionselement.current.value;
    const posttags = posttagselement.current.value.split(" ");

    userIdelement.current.value = " ";
    posttitleelement.current.value = " ";
    postbodyelement.current.value = " ";
    postReactionselement.current.value = " ";
    posttagselement.current.value = " ";

    addPost(userId, posttitle, postbody, postReactions, posttags);
  };

  return (
    <>
      <form className="create">
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Your UserId
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            ref={userIdelement}
            placeholder=" Enter Your userId"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title
          </label>
          <input
            type="text"
            className="form-control"
            ref={posttitleelement}
            id="title"
            placeholder="how are you feeling today"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Body
          </label>
          <textarea
            type="text"
            ref={postbodyelement}
            rows={4}
            className="form-control"
            id="body"
            placeholder="how are you feeling today"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="postReactions" className="form-label">
            Reactions
          </label>
          <input
            type="text"
            ref={postReactionselement}
            className="form-control"
            id="postReactions"
            placeholder="How many reactions do you get"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="hashtags" className="form-label">
            Hashtags
          </label>
          <input
            type="text"
            ref={posttagselement}
            className="form-control"
            id="hashtags"
            placeholder="How many reactions do you get"
          ></input>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleOnclick}
        >
          Submit
        </button>
      </form>
    </>
  );
}
export default Createpost;
