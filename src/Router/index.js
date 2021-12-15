import { Router } from 'express'
import Authorise from '../Middleware/Authorise.js'
import Controllers from '../Controllers/index.js'

const router = Router()

router.get('/', Controllers.GetMemories)
router.post('/', Authorise, Controllers.PostMemories)
router.delete('/:_id', Authorise, Controllers.DeleteMemory)
router.patch('/:_id', Authorise, Controllers.PatchMemories)
router.patch('/like/:_id', Authorise, Controllers.LikeMemory)
router.patch('/dislike/:_id', Authorise, Controllers.DislikeMemory)

export default router
