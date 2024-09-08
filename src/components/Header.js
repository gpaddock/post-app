import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
        <h1>Make a post, {props.title}</h1>
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
