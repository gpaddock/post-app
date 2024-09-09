import {useState} from 'react'

const MakePost = ({onPost}) => {
  const [content, setContent] = useState('')
  const [location, setLocation] = useState('')
  const time = new Date(Date.now())

  const onSubmit = (e) => {
    e.preventDefault()

    if(!content || !location){
        const err = !content ? "post!" : "location!"
        alert("Please add a " + err)
        return
    }

    onPost({content, location, time})

    setContent('')
    setLocation('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
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
