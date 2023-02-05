import { Link } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import {useRef, useContext} from 'react';
import ChatContext from '../store/chat-context';
import { useNavigate } from 'react-router-dom';

function NewPost() {
  const navigate = useNavigate();

  const chatCtx = useContext(ChatContext);

  const textRef = useRef();

  const submitData = async (e) => {
    e.preventDefault();
    const formData = textRef.current.value;
    await fetch('https://pepito-e96e6-default-rtdb.firebaseio.com/posts.json', {
      method: 'POST',
      body: JSON.stringify({
        body: formData,
        author: chatCtx.name
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    navigate('/')
  };
  

  return (
    <Modal>
      <form onSubmit={submitData} className={classes.form}>
        <p>
          <label htmlFor="body">Message</label>
          <textarea ref={textRef} autoFocus id="body" name="body" required rows={3} />
        </p>
        <p className={classes.actions}>
          <Link style={{color: '#537fbc'}} to=".." type="button">
            Cancel
          </Link>
          <button>Send</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;

