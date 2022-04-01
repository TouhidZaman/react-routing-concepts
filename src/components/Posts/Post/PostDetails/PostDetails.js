import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PostDetails.module.css";

const PostDetails = () => {
   const { postId } = useParams();
   const [post, setPost] = useState({});
   const [postAuthor, setPostAuthor] = useState({});

   //Getting post Info
   useEffect(() => {
      let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
      fetch(url)
         .then((response) => response.json())
         .then((data) => setPost(data));
   }, [postId]);

   //Getting post author
   useEffect(() => {
      let url = `https://jsonplaceholder.typicode.com/users/${post.userId}`;
      fetch(url)
         .then((response) => response.json())
         .then((data) => setPostAuthor(data));
   }, [post]);

   return (
      <div className={styles.postDetails}>
         <h2 className={styles.postDetailsTitle}>
            {postAuthor.name}'s Post Information
         </h2>
         <div className={styles.postCard}>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p>
               <span className={styles.postBody}>{post.body}</span>
            </p>
         </div>
      </div>
   );
};

export default PostDetails;
