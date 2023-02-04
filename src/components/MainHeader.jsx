import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        My chat
      </h1>
      <p>
        <Link to="/create-post" className={classes.button} >
          <MdPostAdd size={18} />
          New Message
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
