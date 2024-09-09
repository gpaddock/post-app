import Header from "./components/Header"
import Posts from "./components/Posts"
import { useState } from 'react'
import MakePost from "./components/MakePost"

function App() {
  const [showMakePost, setShowMakePost] = useState(false)

  const [posts, setPosts] = useState(    [{
    id: 1,
    user: "Gus",
    city: "Chicago, IL",
    content:"First Post!",
    time: new Date(Date.now())
    },
    {
    id:2,
    user: "Ethan",
    city: "San Francisco, CA",
    content:"Second Post!",
    time: new Date(Date.now()+5000)
},{
    id:3,
    user: "Gus",
    city: "Chicago, IL",
    content:"Third Post!",
    time: new Date(Date.now()+10000)
}])
  // add post
  const addPost = (post) =>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newPost = {id, ...post}
    console.log(newPost)
    setPosts([...posts, newPost])
  }
  // remove post
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <div className="conatiner">
      <Header
      title="Gus"
      onAdd={() =>setShowMakePost(!showMakePost)}
      showMake={showMakePost}
      />
      {showMakePost && <MakePost onPost={addPost}/>}
      {posts.length > 0 ? <Posts posts={posts} onDelete={deletePost}/> : "No Posts"}
    </div>
  );
}

export default App;
