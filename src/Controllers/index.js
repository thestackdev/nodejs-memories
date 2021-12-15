import Memory from '../Models/Memory.js'

const GetMemories = async (req, res, next) => {
  try {
    const memory = await Memory.find()
    res.send(memory)
  } catch (error) {
    next(error)
  }
}

const PostMemories = async (req, res, next) => {
  try {
    const { title, description, image } = req.body
    if (!title || !description || !image) throw { id: 5 }
    const memory = await Memory.create({
      title,
      description,
      image,
      user: req._id,
    })
    res.status(201).send(memory)
  } catch (error) {
    next(error)
  }
}

const DeleteMemory = async (req, res, next) => {
  try {
    const { _id } = req.params
    if (!_id) throw { id: 5 }
    const memory = await Memory.findByIdAndDelete(_id)
    if (!memory) throw { id: 3 }
    res.send('Ok')
  } catch (error) {
    next(error)
  }
}

const PatchMemories = async (req, res, next) => {
  try {
    const { _id } = req.params
    if (!_id) throw { id: 5 }
    const memory = await Memory.findByIdAndUpdate(_id, req.body)
    if (!memory) throw { id: 3 }
    res.send('Ok')
  } catch (error) {
    next(error)
  }
}

const LikeMemory = async (req, res, next) => {
  try {
    const { _id } = req.params
    if (!_id) throw { id: 5 }
    const memory = await Memory.findByIdAndUpdate(_id, { $inc: { likes: 1 } })
    if (!memory) throw { id: 3 }
    res.send('Ok')
  } catch (error) {
    next(error)
  }
}

const DislikeMemory = async (req, res, next) => {
  try {
    const { _id } = req.params
    if (!_id) throw { id: 5 }
    const memory = await Memory.findByIdAndUpdate(_id, { $inc: { likes: -1 } })
    if (!memory) throw { id: 3 }
    res.send('Ok')
  } catch (error) {
    next(error)
  }
}

export default {
  GetMemories,
  PostMemories,
  PatchMemories,
  DeleteMemory,
  LikeMemory,
  DislikeMemory,
}
