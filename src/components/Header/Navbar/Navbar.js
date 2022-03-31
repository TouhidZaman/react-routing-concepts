import React from "react";
import styles from "./Navbar.module.css";
import CustomLink from "./CustomLink/CustomLink";

const Navbar = () => {
   return (
      <nav className={styles.navbar}>
         <div className={styles.navContainer}>
            <h1>React Routing App</h1>
            <ul className={styles.navItems}>
               <li>
                  <CustomLink to="/">Home</CustomLink>
               </li>
               <li>
                  <CustomLink to="/friends">Friends</CustomLink>
               </li>
               <li>
                  <CustomLink to="/about">About</CustomLink>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
