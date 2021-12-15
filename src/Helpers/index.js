import Jsonwebtoken from 'jsonwebtoken'

const verifyToken = (payload) => {
  return Jsonwebtoken.verify(payload, process.env.JWT_SECRET)
}
export default { verifyToken }
