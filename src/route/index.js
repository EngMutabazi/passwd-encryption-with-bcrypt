const  express=require('express') ;
const router=express.Router();
const userController =require('../controller/index')

router.post('/register',userController);

module.exports=router
