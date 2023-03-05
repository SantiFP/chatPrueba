import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList({ posts, loading }) {  
  return (
    <>
      {loading && <div className={classes.loadingDiv}>
        <p className={classes.loading}>
        Loading ...</p>
        </div>
        }
      {posts && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no chats yet</h2>
          <p>Start talking!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
