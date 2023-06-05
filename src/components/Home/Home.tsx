import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__logo}>
        <img
          className={styles.home__logo_img}
          src={process.env.PUBLIC_URL + "/stream_online_header.svg"}
          alt='svg'
        />
      </div>
      <div className={styles.home__boxes}>
        <div className={styles.home__boxes_box}>
          <h2 className={styles.title}>Streaming PPV, obsługa i realizacja</h2>
          <p className={styles.p_title}>
            Transmisje online w systemie Pay Per View
          </p>
        </div>
        <div className={styles.home__boxes_box}>
          <h2 className={styles.title}>Wirtualne studio 3D</h2>
          <p className={styles.p_title}>Wirtualne Studio z Augmented Reality</p>
        </div>
        <div className={styles.home__boxes_box}>
          <h2 className={styles.title}>
            Produkcja telewizyjna, studio TV, transmisje na żywo
          </h2>
          <p className={styles.p_title}>
            Transmisje wydarzeń sportowych, masowych i kulturalnych
          </p>
        </div>
      </div>
      <div className={styles.home__refs}>
        <a href='/article'>
          <div className={styles.home__refs_button}>Czytaj więcej</div>
        </a>
        <a href='/form'>
          <div className={styles.home__refs_button}>Kontakt</div>
        </a>

        <a href='/player'>
          <div className={styles.home__refs_button}>Odtwarzacz</div>
        </a>
      </div>
    </div>
  );
};

export default Home;
