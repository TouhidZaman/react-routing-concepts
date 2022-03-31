import React, { useEffect, useState } from "react";
import Friend from "./Friend/Friend";
import styles from "./Friends.module.css";

const Friends = () => {
   const [friends, setFriends] = useState([]);

   //Getting Friends
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((data) => setFriends(data.slice(0, 9)));
   }, []);

   return (
      <div className={styles.friends}>
         <h3>This is friends page</h3>
         <div className={styles.friendsContainer}>
            {friends.map((friend) => (
               <Friend key={friend.id} friend={friend} />
            ))}
         </div>
      </div>
   );
};

export default Friends;
