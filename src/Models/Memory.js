import mongoose from 'mongoose'

const Memory = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Memory', Memory, 'Memories')
