import React from "react";
import styles from "./CustomLink.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
   let resolved = useResolvedPath(to);
   let match = useMatch({ path: resolved.pathname, end: true });

   return (
      <Link className={styles.link + ` ${match && styles.active}`} to={to} {...props}>
         {children}
      </Link>
   );
};

export default CustomLink;
