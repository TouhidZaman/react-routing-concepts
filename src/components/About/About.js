import React from "react";
import styles from "./About.module.css";

const About = () => {
   return (
      <div className={styles.about}>
         <h3>This is about page</h3>
         <p>
            About page content: Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            reiciendis voluptatum amet. Non provident obcaecati earum harum eligendi ullam
            placeat.
         </p>
      </div>
   );
};

export default About;
