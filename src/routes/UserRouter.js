import {Router} from 'express'
const UserController = require('../controllers/UserController')
const router = Router();


router.get('/:id',UserController.getUser)

export default router