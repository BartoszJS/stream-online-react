import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.header__content}>
        <Link to='/stream-online-react' className={styles.link}>
          <div className={styles.header__logo}>
            <img
              src={process.env.PUBLIC_URL + "/stream_online_header.svg"}
              alt='svg'
            />
          </div>
        </Link>
        <ul className={styles.header__list}>
          <li>
            <Link to='/article'>ARTICLE</Link>
          </li>
          <li>
            <Link to='/form'>FORM</Link>
          </li>
          <li>
            <Link to='/player'>PLAYER</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
