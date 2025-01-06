import PropTypes from 'prop-types'

const Notification = ({ msg }) => {
  if (msg === null) {
    return null
  }

  return (
    <div className={msg.isError ? 'error' : 'message'}>
      {msg.message}
    </div>
  )
}

// Lisätään prop-tyypit
Notification.propTypes = {
  msg: PropTypes.object
}

export default Notification