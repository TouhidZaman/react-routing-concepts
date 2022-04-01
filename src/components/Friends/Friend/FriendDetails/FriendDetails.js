import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./FriendDetails.module.css";

const FriendDetails = () => {
   const { friendId } = useParams();
   const [friend, setFriend] = useState({});

   //Getting friend Info
   useEffect(() => {
      let url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
      fetch(url)
         .then((response) => response.json())
         .then((data) => setFriend(data));
   }, [friendId]);

   return (
      <div className={styles.friendDetails}>
         <h2 className={styles.friendDetailsTitle}>
            {friend.name}'s Personal Information
         </h2>
         <div className={styles.friendCard}>
            <div className={styles.friendImage}>
               <img
                  src="https://via.placeholder.com/150/258967"
                  alt="placeholder-img"
               />
            </div>
            <div className={styles.friendInfo}>
               <h3 className={styles.friendName}>Name: {friend.name}</h3>
               <p>Email: <span className={styles.friendEmail}>{friend.email}</span> </p>
               <p>City: {friend.address?.city}</p> 
               <p>Street: {friend.address?.street}</p>
               <small>GEO: {friend.address?.geo.lng}</small>
            </div>
         </div>
      </div>
   );
};

export default FriendDetails;
