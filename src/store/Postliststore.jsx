import { createContext, useReducer } from "react";

export const Postlist = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
  addinitialposts: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "delete") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "addinitialposts") {
    newPostList = action.payload.posts;
  } else if (action.type === "addPost") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const Postlistprovider = ({ children }) => {
  const [postlist, dispatchpostlist] = useReducer(PostListReducer, []);

  const addPost = (userId, posttitle, postbody, postReactions, posttags) => {
    dispatchpostlist({
      type: "addPost",
      payload: {
        id: Math.floor(Math.random() * 1000000).toString(),
        title: posttitle,
        body: postbody,
        reactions: postReactions,
        userId: userId,
        tags: posttags,
      },
    });
  };

  const addinitialposts = (posts) => {
    dispatchpostlist({
      type: "addinitialposts",
      payload: { posts },
    });
  };

  const deletePost = (postId) => {
    dispatchpostlist({
      type: "delete",
      payload: {
        postId,
      },
    });
  };

  return (
    <Postlist.Provider
      value={{ postlist, addPost, deletePost, addinitialposts }}
    >
      {children}
    </Postlist.Provider>
  );
};

export default Postlistprovider;
