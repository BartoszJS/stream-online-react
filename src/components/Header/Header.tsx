import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.header__content}>
        <a href='/'>
          <div className={styles.header__logo}>
            <img
              src={process.env.PUBLIC_URL + "/stream_online_header.svg"}
              alt='svg'
            />
          </div>
        </a>
        <ul className={styles.header__list}>
          <li>
            <a href='/article'>ARTICLE</a>
          </li>
          <li>
            <a href='/form'>FORM</a>
          </li>
          <li>
            <a href='/player'>PLAYER</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;