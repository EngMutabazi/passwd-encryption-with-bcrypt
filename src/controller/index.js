
const bcrypt=require('bcrypt')
const table=require('../model/index') 

const registerUser= async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        const salt = await bcrypt.genSalt(10);
        
        const increaptedpassword= await bcrypt.hash(password,salt)
        const newUser={
             name,
             email,
             password:increaptedpassword
        }
       const result= table.push(newUser);
    if(!result) return res.send({code:404,message:"use not registered!"})
        
        return res.send({code:201,message:"user registered successfuly",newUser});
    
      } catch (error) {
          res.sendStatus(500)
      }
    
}
module.exports=registerUser;