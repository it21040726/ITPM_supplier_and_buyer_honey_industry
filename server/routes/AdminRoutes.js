import express from 'express'
import { signin, signup, signout } from '../controllers/adminControls.js'
import { valSignReq, isReqValidated, validateReq } from '../validators/auth.js'

const router = express.Router()

router.post("/admin/signin", valSignReq, isReqValidated, signin)
router.post("/admin/signup", validateReq, isReqValidated, signup)
router.post('/admin/signout', signout)

export default router