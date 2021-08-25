
const bcrypt=require('bcrypt')
const table=require('../model/index') 
const jwt=require('jsonwebtoken');

class userContoller{
    static async registerUser(req,res){
        try {
            const {name,email,password}=req.body;
            const salt = await bcrypt.genSalt(10);

         const token=  jwt.sign({table},'secretekey')
              
            
            const increaptedpassword= await bcrypt.hash(password,salt)
            const newUser={
                 name,
                 email,
                 password:increaptedpassword,
                 token
            }
           const result= table.push(newUser);
        if(!result) return res.send({code:404,message:"use not registered!"})
            
            return res.send({code:201,message:"user registered successfuly",newUser});
        
          } catch (error) {
              res.sendStatus(500)
          }
         
        
    }
    //gitting all list of users

    static async getAllUser(req,res){
        const dataRequired={
           name: table.name,
           email:table.email,
           password:table.password

        }
        res.send({code:200,message:"retrived successfuly",dataRequired})
     }
     //login user
     static async login(req,res){
        res.json({message:'token verified!',data:table})
        }
        
     }




module.exports=userContoller