import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import PostsList from "../components/PostsList";

function Posts() {

  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const timer = setInterval(async () => {
      const response = await fetch(
        "https://pepito-e96e6-default-rtdb.firebaseio.com/posts.json"
      );
      const resData = await response.json();
      const loadedPosts = [];
      for (const key in resData) {
        loadedPosts.unshift({
          id: key,
          author: resData[key].author,
          body: resData[key].body,
        });
      }
      return loadedPosts ? setPosts(loadedPosts) : [];
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    
  }, []);

  return (
    <>
      <Outlet />
      <main>
        <PostsList posts={posts} />
      </main>
    </>
  );
}

export default Posts;
