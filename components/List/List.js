import React, { useState } from "react";
import Link from "next/link";

import styles from "./List.module.scss";

const List = ({ list, classMenu, classSubMenu }) => {
  const [activeLink, setActiveLink] = useState();

  const activeBlock = (e, id) => {
    e.preventDefault();
    setActiveLink(id);
  };

  return (
    <ul className={classMenu}>
      {list.map(({ id, title, path, links }) => {
        return (
          <li
            key={id}
            className={activeLink === id ? styles.active : ""}
            onClick={(e) => activeBlock(e, id)}
          >
            <Link
              className={links ? styles.arrow : ""}
              href={path}
              target="_blank"
            >
              {title}
            </Link>

            {links && (
              <ul className={classSubMenu}>
                {links.map(({ id, title, path }) => (
                  <li key={id}>
                    <Link href={path} target="_blank">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
