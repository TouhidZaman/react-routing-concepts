import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className={styles.navbar}>
         <div className={styles.navContainer}>
            <h1>React Routing App</h1>
            <ul className={styles.navItems}>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/friends">Friends</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
