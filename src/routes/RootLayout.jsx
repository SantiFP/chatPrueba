import { Outlet } from "react-router-dom";
import classes from "./NewPost.module.css";

import MainHeader from "../components/MainHeader";
import Modal from "../components/Modal";
import { useContext, useState } from "react";
import ChatContext from "../store/chat-context";

function RootLayout() {
  const [name, setName] = useState("");
  const [showModal, setShowMOdal] = useState(true);
  const chatCtx = useContext(ChatContext);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const submit = () => {
    name && setShowMOdal(false);
    name && chatCtx.enteredNameHandler(name)
  };

  const modal = (
    <Modal>
      <form
        onSubmit={(e) => e.preventDefault()}
        method="post"
        className={classes.form}
      >
        <p>
          <label htmlFor="body">Enter your name</label>
          <input
            onChange={nameHandler}
            id="body"
            name="body"
            required
            autoFocus
            rows={3}
          />
        </p>
        <p className={classes.actions}>
          <button onClick={submit}>Submit Name</button>
        </p>
      </form>
    </Modal>
  );

  return (
    <>
      <MainHeader />
      {showModal && modal }
      <div className={classes.hello}>{`Hello ${name}`}</div>

      <Outlet />
    </>
  );
}

export default RootLayout;
