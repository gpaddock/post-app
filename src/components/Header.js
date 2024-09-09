import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  const onClick = () => {
    console.log("button clicked")
    }
  return (
    <header className='header'>
        <h1>Make a post, {props.title}</h1>
        <Button color="green" text="post" onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: "no-name goofy"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
