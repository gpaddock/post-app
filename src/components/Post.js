import { FaTimes } from 'react-icons/fa'

const Post = ({ post, onDelete }) => {
  return (
    <div className="post">
        <h3>{post.user + ": " + post.content}
        <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(post.id)}/>
        </h3>
        <p>{post.time.toUTCString()}</p>

    </div>
  )
}

export default Post
