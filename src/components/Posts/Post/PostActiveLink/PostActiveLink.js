import React from "react";
import styles from "./PostActiveLink.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const PostActiveLink = ({ to, children, ...props }) => {
   const resolved = useResolvedPath(to);
   const match = useMatch({ path: resolved.pathname, end: true });
   return (
      <Link className={styles.link + ` ${match && styles.active}`} to={to} {...props}>
         {children}
      </Link>
   );
};

export default PostActiveLink;
