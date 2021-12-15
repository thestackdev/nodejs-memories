import Helpers from '../Helpers/index.js'

const Authorise = (req, res, next) => {
  try {
    const { token } = req.cookies
    if (!token) throw { id: 2 }
    const decode = Helpers.verifyToken(token)
    if (!decode) throw { id: 2 }

    req._id = decode._id
    next()
  } catch (error) {
    next(error)
  }
}

export default Authorise
