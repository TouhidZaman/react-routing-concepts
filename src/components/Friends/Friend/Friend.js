import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Friend.module.css";

const Friend = ({ friend }) => {
   const { id, name, username } = friend;
   const navigate = useNavigate()

   // Navigating to Friend Details Component
   const viewFriendDetails = () => {
      const path = `/friends/friend/${id}`;
      navigate(path);
   };

   return (
      <div className={styles.friend}>
         <div className={styles.friendCard}>
            <h3 className={styles.friendName}>{name}</h3>
            <div className={styles.action}>
               <button onClick={viewFriendDetails} className={styles.friendDetailsButton}>
                  {username}
               </button>
            </div>
         </div>
      </div>
   );
};

export default Friend;
