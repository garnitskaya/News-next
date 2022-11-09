import Image from "next/image";
import Container from "../Container/Container";
import styles from "./Stat.module.scss";

const data = [
  {
    id: 1,
    title: "особовий склад",
    quantity: "~36 200",
  },
  {
    id: 2,
    title: "танки",
    quantity: "1 589",
  },
  {
    id: 3,
    title: "артсистеми",
    quantity: "4578",
  },
  {
    id: 4,
    title: "літаки",
    quantity: "220",
  },
  {
    id: 5,
    title: "РСЗВ",
    quantity: "246",
  },
  {
    id: 6,
    title: "гелікоптери",
    quantity: "190",
  },
  {
    id: 7,
    title: "ББМ",
    quantity: "4578",
  },
];

const Stat = () => {
  return (
    <div className={styles.stat}>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.info}>
            <span>131 день війни:</span>
          </div>

          <div className={styles.flex}>
            {data.map(({ id, title, quantity }) => (
              <div key={id} className={styles.block}>
                <Image
                  src={`/icons/Helmet_${id}.png`}
                  alt={title}
                  width={20}
                  height={20}
                />
                <div className={styles.title}>
                  {title}
                  <span>{quantity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Stat;
