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

export default Notification