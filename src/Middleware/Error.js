const error = (error, req, res, next) => {
  console.log(error)
  if (error.name) resolveId(error)
  switch (error.id) {
    case 1:
      res.status(400).send(error.message)
      break
    case 2:
      res.status(401).send('Unauthorised request')
      break
    case 3:
      res.status(400).send('Memory not found')
      break
    case 5:
      res.status(400).send('Invalid Request!')
      break
    case 6:
      res.status(404).send('No user found!')
      break
    case 10:
      res.status(400).send(`Syntax Error!`)
      break
    default:
      res.status(500).send('Something went wrong!')
      break
  }
}

const resolveId = (error) => {
  switch (error.name) {
    case 'ValidationError':
      let message = []
      for (let i in error.errors) {
        message.push({ [i]: error.errors[i].properties.message })
      }
      error.message = message
      error.id = 1
      break
    case 'MongoServerError':
      error.id = 1
      if (error.code === 11000) {
        if (error.keyValue.username)
          error.message = { username: 'Username already taken' }
        else if (error.keyValue.email)
          error.message = { email: 'Email already taken' }
      }
      break
    case 'JsonWebTokenError':
    case 'TokenExpiredError':
      error.id = 2
      break
    case 'SyntaxError':
      error.id = 10
      break
    default:
      break
  }
  return error
}

export default error
