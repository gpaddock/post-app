import Header from "./components/Header"
import Posts from "./components/Posts"
import { useState } from 'react'
import MakePost from "./components/MakePost"

function App() {
  const [posts, setPosts] = useState(    [{
    id: 1,
    user: "Gus",
    city: "Chicago, IL",
    content:"First Post!",
    time: new Date(Date.now()).toUTCString()
    },
    {
    id:2,
    user: "Ethan",
    city: "San Francisco, CA",
    content:"Second Post!",
    time: new Date(Date.now()+5000).toUTCString()
},{
    id:3,
    user: "Gus",
    city: "Chicago, IL",
    content:"Third Post!",
    time: new Date(Date.now()+10000).toUTCString()
}])

  // remove post
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <div className="conatiner">
      <Header title="Gus"/>
      <MakePost />
      {posts.length > 0 ? <Posts posts={posts} onDelete={deletePost}/> : "No Posts"}
    </div>
  );
}

export default App;
