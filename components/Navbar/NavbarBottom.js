import Link from "next/link";
import { useRouter } from "next/router";
import CitiesBlock from "../CitiesBlock/CitiesBlock";
import Container from "../Container/Container";
import styles from "./Navbar.module.scss";

const navigation = [
  { id: 1, title: "війна", path: "/", icon: true },
  { id: 2, title: "новини", path: "/news" },
  { id: 3, title: "політика", path: "/politics" },
  { id: 4, title: "економіка", path: "/economy" },
  { id: 5, title: "суспільство", path: "/society" },
  { id: 6, title: "погляди", path: "/views" },
  { id: 7, title: "світ", path: "/world" },
];

const NavbarBottom = () => {
  const { pathname } = useRouter();

  const navigationItem = navigation.map(({ id, title, path, icon }) => (
    <li key={id}>
      {icon ? (
        <svg
          className={styles.icon}
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3984 5.70306C14.3828 4.07806 13.0625 2.67962 11.9141 1.53118C11.8432 1.46098 11.7566 1.40875 11.6615 1.37885C11.5664 1.34895 11.4654 1.34225 11.3672 1.35931C11.2682 1.3749 11.1745 1.41434 11.0942 1.47423C11.0139 1.53412 10.9494 1.61266 10.9063 1.70306L8.49219 6.76556L5.97656 5.08587C5.83858 4.99454 5.67031 4.96088 5.50781 4.99212C5.4272 5.00803 5.35051 5.03968 5.28215 5.08526C5.21378 5.13084 5.15507 5.18945 5.10938 5.25775C3.58594 7.55462 2.8125 9.63275 2.8125 11.4374C2.8125 13.3437 3.56975 15.1718 4.91767 16.5198C6.26559 17.8677 8.09376 18.6249 10 18.6249C11.9062 18.6249 13.7344 17.8677 15.0823 16.5198C16.4302 15.1718 17.1875 13.3437 17.1875 11.4374C17.1875 9.49212 16.6016 7.61712 15.3984 5.70306ZM14.6328 12.1562C14.485 13.1415 14.0251 14.0534 13.3205 14.758C12.616 15.4625 11.7041 15.9225 10.7187 16.0702H10.625C10.4682 16.0691 10.3175 16.009 10.203 15.9019C10.0884 15.7949 10.0182 15.6487 10.0064 15.4923C9.99462 15.3359 10.042 15.1808 10.1393 15.0578C10.2365 14.9348 10.3764 14.8527 10.5313 14.8281C11.2495 14.7113 11.9129 14.3716 12.4274 13.857C12.942 13.3425 13.2817 12.6791 13.3984 11.9609C13.4071 11.8767 13.4327 11.7951 13.4738 11.7212C13.5149 11.6472 13.5706 11.5823 13.6375 11.5305C13.7044 11.4787 13.7812 11.441 13.8631 11.4198C13.945 11.3985 14.0304 11.3941 14.114 11.4068C14.1977 11.4195 14.2779 11.4491 14.3498 11.4937C14.4217 11.5383 14.4838 11.5971 14.5323 11.6664C14.5808 11.7358 14.6147 11.8143 14.632 11.8971C14.6493 11.9799 14.6496 12.0654 14.6328 12.1484V12.1562Z"
            fill="#FF7534"
          />
        </svg>
      ) : null}
      <Link className={path === pathname ? styles.active : null} href={path}>
        {title}
      </Link>
    </li>
  ));

  return (
    <Container>
      <nav className={styles.bottom}>
        <ul className={styles.list}>{navigationItem}</ul>
        <CitiesBlock clazz={styles.bottomCities} />
        <Link className={styles.block} href="/">
          <span className={styles.dot} />
          Live
        </Link>
      </nav>
    </Container>
  );
};

export default NavbarBottom;
