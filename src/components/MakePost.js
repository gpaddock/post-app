import {useState} from 'react'

const MakePost = () => {
  const [content, setContent] = useState('')
  const [location, setLocation] = useState('')
  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Post</label>
            <input
            type="Text"
            placeholder="Make Post"
            value={content}
            onChange= {(e) => setContent(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Location</label>
            <input
            type="Text"
            placeholder="Chicago, IL"
            value={location}
            onChange= {(e) => setLocation(e.target.value)}/>
        </div>
        <input type="submit" value="Publish Post" className="btn btn-block"/>
    </form>
  )
}

export default MakePost
