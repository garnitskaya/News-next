import React from "react";

import Container from "../Container/Container";
import Sidebar from "./Sidebar";
import Content from "./Content";

import styles from "./NewsSection.module.scss";

const NewsSection = () => {
  return (
    <section className={styles.news}>
      <Container>
        <div className={styles.flex}>
          <Sidebar />
          <div className={styles.content}>
            <Content />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsSection;
