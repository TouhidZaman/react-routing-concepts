import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import FriendDetails from "./components/Friends/Friend/FriendDetails/FriendDetails";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import PostDetails from "./components/Posts/Post/PostDetails/PostDetails";
import Posts from "./components/Posts/Posts";

function App() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/friend/:friendId" element={<FriendDetails />} />
            <Route path="/posts" element={<Posts />}>
               <Route path=":postId" element={<PostDetails />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;
