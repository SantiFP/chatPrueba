import { useState } from 'react';
import classes from './Post.module.css';

function Post({ id, author, body }) {

  const [update,setUpdate] = useState(false);
  const remove = async () => {
    await fetch(`https://pepito-e96e6-default-rtdb.firebaseio.com/posts/${id}.json/`,{
      method: 'DELETE',  
    }); 
    setUpdate(true)
  };

  return (
    <li onDoubleClick={remove} className={classes.post}>
      <div>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </div>
    </li>
  );
}

export default Post;
