const  express=require('express') ;
const { login } = require('../controller/index');
const router=express.Router();
const userContoller=require('../controller/index')
const verifyToken=require('../middleware/verifyToken.middleware')

const{getAllUser,registerUser}=userContoller
router.post('/register',registerUser);
router.post('/login',login)
router.get('/users',getAllUser)

module.exports=router
