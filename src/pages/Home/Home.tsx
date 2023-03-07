import React, { FC } from "react";
import Button from "../../components/ui/Button/Button";
import Card from "../../components/ui/Card/Card";
import styles from "./Home.module.scss";
import CardImg from "../../assets/img/card/card.jpg";

const Home: FC = () => {
  const products = [
    {
      image: CardImg,
      name: "Футболка на плечиках",
      description: "Её позволит только айтишник",
      price: 1399,
    },
    {
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      name: "Футболка с рукой",
      description: "Рука, плечики, футболка",
      price: 1299,
    },
    {
      image:
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3725&q=80",
      name: "Рубашка с галстуком",
      description:
        "Клёвая рубашка для успешного человека, но не для айтишника - для них свитер",
      price: 5999,
    },
    {
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2215&q=80",
      name: "Футболка с циферками",
      description: "Шляпа, если честно",
      price: 0,
    },
    {
      image:
        "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      name: "Кепка-кастрюля",
      description: "Чисто шапка для волка",
      price: 1699,
    },
    {
      image: "https://ae01.alicdn.com/kf/HTB1vR_OqwMPMeJjy1Xdq6ysrXXaY.jpg",
      name: "Свитер разной расцветки",
      description: "Вязанная кофта",
      price: 10999,
    },
    {
      image: "https://sloot.ru/images/mujskoy_sviter_s_olenyami.jpg",
      name: "Свитер сисадмина",
      description: "Ты не тру сисадмин, если нет такого шмота",
      price: 1984,
    },
    {
      image:
        "https://avatars.mds.yandex.net/get-znatoki/1506847/2a000001823dcc9560614c9df0bd1940c5eb/orig",
      name: "Сорочка для Си-разработчика",
      description: "Ну тут не надо описание даже",
      price: 1905,
    },
  ];

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroSection__container}>
          <h1 className={styles.heroSection__title}>
            Первый мерч-шоп осознанной меркантильности
          </h1>

          <p className={styles.heroSection__subtitle}>
            Первый мерч-шоп осознанной меркантильности (h1) Создано отчаявшимися
            найти валютную удалёнку джунами для таких же джунов В каталог мерча
            Нанять талантливых джунов
          </p>

          <div className={styles.heroSection__actions}>
            <Button variant="main" className="button" onClick={() => {}}>
              В каталог мерча
            </Button>
            <Button variant="second" className="button" onClick={() => {}}>
              Нанять талантливых джунов
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.cards}>
        <div className={styles.cards__container}>
          <h2 className={styles.cards__title}>Футболки и свитшоты</h2>

          <div className={styles.cards__items}>
            {products.map((product, i) => (
              <Card key={i} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
