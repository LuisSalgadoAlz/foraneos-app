const {
  createUser,
  login,
  getAllUsers
} = require('../controllers/auth.controller')

const { Router } = require('express')
const router = Router()

router.post('/register', createUser)
router.post('/login', login)
router.get('/users', getAllUsers)

module.exports = router
