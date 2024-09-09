import Header from "./components/Header"
import Posts from "./components/Posts"
import { useState, useEffect } from 'react'
import MakePost from "./components/MakePost"

function App() {
  const [showMakePost, setShowMakePost] = useState(false)

  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }
    getPosts()
  }, [])
  // fetch posts
  const fetchPosts = async () =>{
    const res = await fetch("http://localhost:4000/posts")
    const data = await res.json()
    return data
  }
  // add post
  const addPost = async (post) =>{
    const res = await fetch('http://localhost:4000/posts', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const data = await res.json()

    setPosts([...posts, data])
    // old method
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newPost = {id, ...post}
    // console.log(newPost)
    // setPosts([...posts, newPost])
  }
  // remove post
  const deletePost = async (id) => {
    await fetch(`http://localhost:4000/posts/${id}`, {
      method: 'DELETE'
    })
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
