import React, { useEffect, useState } from "react";
import { Link, Outlet, useResolvedPath } from "react-router-dom";
import Post from "./Post/Post";
import styles from "./Posts.module.css";

const Posts = () => {
   const [posts, setPosts] = useState([]);

   //Getting posts
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((response) => response.json())
         .then((data) => setPosts(data));
   }, []);

   return (
      <div className={styles.posts}>
         <h3 className={styles.postsTitle}>
            All Post Id's: Click any id to view post Details
         </h3>
         <div className={styles.postsContainer}>
            <ul>
               {posts.map((post) => (
                  <li>
                     <Post key={post.id} post={post} />
                  </li>
               ))}
            </ul>
         </div>
         <div className={styles.postDetailsContainer}>
            <Outlet />
         </div>
      </div>
   );
};

export default Posts;
