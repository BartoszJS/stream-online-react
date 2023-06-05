import styles from "./Article.module.scss";

const Article = () => {
  return (
    <div className={styles.article}>
      <div className={styles.article__container}>
        <div className={styles.article__container_text}>
          <p className={styles.article__container_text_title}>
            Streaming PPV, obsługa i realizacja
          </p>
          <div className={styles.article__container_text_border}></div>
          <p className={styles.article__container_text_subtitle}>
            Transmisje online w systemie Pay Per View
          </p>
          <p className={styles.article__container_text_p}>
            Obsługujemy największe płatne wydarzenia online w Polsce. Streaming
            PPV dla Twojej transmisji. Dedykowane platformy PPV.
          </p>
        </div>
        <div className={styles.article__container_photo}>
          <img
            src={
              process.env.PUBLIC_URL +
              "/infinity-Green-screen-studio-KL-malaysia.jpg"
            }
            alt=''
          />
        </div>
      </div>
      <div className={styles.article__container}>
        <div className={styles.article__container_text}>
          <p className={styles.article__container_text_title}>
            Wirtualne studio 3D _ konferencje, webinaria, programy TV
          </p>
          <div className={styles.article__container_text_border}></div>
          <p className={styles.article__container_text_subtitle}>
            Wirtualne Studio z Augmented Reality
          </p>
          <p className={styles.article__container_text_p}>
            Wirtualne studio telewizyjne w Warszawie. 20 lat doświadczenia na
            rynku produkcji, transmisji online i streamingu live. Studio w
            Warszawie, streaming na cały świat.
          </p>
        </div>
        <div className={styles.article__container_photo}>
          <img
            src={process.env.PUBLIC_URL + "/ppv-icon-pay-per-view-vector.jpg"}
            alt=''
          />
        </div>
      </div>
      <div className={styles.article__container}>
        <div className={styles.article__container_text}>
          <p className={styles.article__container_text_title}>
            Produkcja telewizyjna, studio TV, transmisje na żywo
          </p>
          <div className={styles.article__container_text_border}></div>
          <p className={styles.article__container_text_subtitle}>
            Transmisje wydarzeń sportowych, masowych i kulturalnych
          </p>
          <p className={styles.article__container_text_p}>
            20 lat doświadczenia na rynku produkcji, transmisji online i
            streamingu live. Studio w Warszawie, streaming na cały świat
          </p>
        </div>
        <div className={styles.article__container_photo}>
          <img src={process.env.PUBLIC_URL + "/MDR_Kripo_live.JPG"} alt='asa' />
        </div>
      </div>
    </div>
  );
};

export default Article;
