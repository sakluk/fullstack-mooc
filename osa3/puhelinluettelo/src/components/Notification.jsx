import PropTypes from 'prop-types'

const Notification = ({ msg }) => {
  // console.log('Notification:', msg)
  if (!msg) {
    return null
  }

  if (msg.isError) {
    // console.log('Notification: showing error')
    return (
      <div className="error">
        {msg.message}
      </div>
    )
  }

  // console.log('Notification: showing message')
  return (
    <div className="message">
      {msg.message}
    </div>
  )

}

Notification.propTypes = {
  msg: PropTypes.shape({
    message: PropTypes.string.isRequired,
    isError: PropTypes.bool.isRequired,
  }),
}

export default Notification