import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  return (
    <header className='header'>
        <h1>Make a post, {props.title}</h1>
        <Button color={props.showMake ? 'red' : 'green'} text={props.showMake ? 'Close' : 'Add'} onClick={props.onAdd}/>
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
