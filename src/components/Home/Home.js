import React from "react";
import styles from "./Home.module.css";

const Home = () => {
   return (
      <div className={styles.home}>
         <h3>This is home page</h3>
         <p>
            home page content: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cumque fuga voluptates sequi tempore delectus esse, consectetur ullam eligendi
            aliquid ducimus.
         </p>
      </div>
   );
};

export default Home;
