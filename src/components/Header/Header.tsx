import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.header__content}>
        <a href='//stream-online-react'>
          <div className={styles.header__logo}>
            <img
              src={process.env.PUBLIC_URL + "/stream_online_header.svg"}
              alt='svg'
            />
          </div>
        </a>
        <ul className={styles.header__list}>
          <li>
            <a href='/stream-online-react/article'>ARTICLE</a>
          </li>
          <li>
            <a href='/stream-online-react/form'>FORM</a>
          </li>
          <li>
            <a href='/stream-online-react/player'>PLAYER</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
