const posts = [
    {
        id:1,
        user: "Gus",
        timestamp: Date.now(),
        city: "Chicago, IL",
        content:"First Post!"
    },
    {
        id:2,
        user: "Ethan",
        timestamp: Date.now()+2,
        city: "San Francisco, CA",
        content:"Second Post!"
    },
    {
        id:3,
        user: "Gus",
        timestamp: Date.now()+3,
        city: "Chicago, IL",
        content:"Third Post!"
    }
]

const Posts = () => {
  return (
    <>
    {posts.map((post) => (<h3>{post.user+ ": " + post.content}</h3>))}

    </>
  )
}

export default Posts
