import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import styles from "./Form.module.scss";

type Inputs = {
  name: string;
  surname: string;
  province: string;
  interests: string;
  agreement: boolean;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();

  const [dataInLocalStorage, setDataInLocalStorage] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("birthdayData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof Inputs, parsedData[key]);
      });
      setDataInLocalStorage(true);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<Inputs> = async ({
    name,
    surname,
    interests,
    province,
    agreement,
  }) => {
    localStorage.setItem(
      "birthdayData",
      JSON.stringify({ name, surname, interests, province, agreement })
    );
    setDataInLocalStorage(true);
  };

  const handleEdit = () => {
    setDataInLocalStorage(false);
    localStorage.removeItem("birthdayData");
  };

  if (dataInLocalStorage) {
    const storedData = JSON.parse(localStorage.getItem("birthdayData")!);

    return (
      <div className={styles.form}>
        <div className={styles.form__container}>
          <h2 className={styles.form__title}>Dane</h2>
          <div className={styles.form__label}>
            Imię:
            <p className={styles.form__input}> {storedData.name}</p>
          </div>
          <div className={styles.form__label}>
            Nazwisko:
            <div className={styles.form__input}>{storedData.surname}</div>
          </div>
          <div className={styles.form__label}>
            Województwo:
            <p className={styles.form__input}>{storedData.province}</p>
          </div>
          <div className={styles.form__label}>
            Zainteresowania:
            <p className={styles.form__input}>{storedData.interests}</p>
          </div>
          <p>Zgoda: {storedData.agreement === true ? "tak" : "nie"}</p>
          <button className={styles.form__button} onClick={handleEdit}>
            Zmień
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.form}>
      <form
        className={styles.form__container}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={styles.form__title}>Formularz</h2>
        <label className={styles.form__label}>
          Imię:
          <input
            type='text'
            placeholder='name'
            className={styles.form__input}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className={styles.form__error}>Enter a valid name</p>
          )}
        </label>
        <label className={styles.form__label}>
          Nazwisko:
          <input
            type='text'
            placeholder='surname'
            className={styles.form__input}
            {...register("surname", { required: true })}
          />
          {errors.surname && (
            <p className={styles.form__error}>Enter a valid surname</p>
          )}
        </label>
        <label className={styles.form__label}>
          Województwo:
          <select
            className={styles.form__input}
            {...register("province", { required: true })}
          >
            <option value=''>Wybierz województwo</option>
            <option value='dolnośląskie'>Dolnośląskie</option>
            <option value='kujawsko-pomorskie'>Kujawsko-Pomorskie</option>
            <option value='lubelskie'>Lubelskie</option>
            <option value='lubuskie'>Lubuskie</option>
            <option value='łódzkie'>Łódzkie</option>
            <option value='małopolskie'>Małopolskie</option>
            <option value='mazowieckie'>Mazowieckie</option>
            <option value='opolskie'>Opolskie</option>
            <option value='podkarpackie'>Podkarpackie</option>
            <option value='podlaskie'>Podlaskie</option>
            <option value='pomorskie'>Pomorskie</option>
            <option value='śląskie'>Śląskie</option>
            <option value='świętokrzyskie'>Świętokrzyskie</option>
            <option value='warmińsko-mazurskie'>Warmińsko-Mazurskie</option>
            <option value='wielkopolskie'>Wielkopolskie</option>
            <option value='zachodniopomorskie'>Zachodniopomorskie</option>
          </select>
          {errors.province && (
            <p className={styles.form__error}>Select a province</p>
          )}
        </label>
        <label className={styles.form__label}>
          Zainteresowania:
          <textarea
            rows={4}
            placeholder='interests'
            className={`${styles.form__input} textarea`}
            {...register("interests", { required: false })}
          />
          {errors.interests && (
            <p className={styles.form__error}>Enter valid interests</p>
          )}
        </label>

        <label className={styles.form__agreement}>
          <input
            type='checkbox'
            className={styles.form__checkbox}
            {...register("agreement", { required: true })}
          />
          Zgoda na przetwarzanie danych
        </label>
        {errors.agreement && (
          <p className={styles.form__error}>
            You must agree to data processing
          </p>
        )}
        <button className={styles.form__button} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
