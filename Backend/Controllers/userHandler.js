import User from "../Models/user.js"
import { validateToken } from "../Services/authentication.js";




export const handleUserSignUp = async (req, res) => {
  
  const { name, contactNumber , password , email ,  } = req.body;
  console.log({ name , contactNumber, password  , email});
  if (!name || !contactNumber || !password) {
    return res.status(400).json({ msg: "Invalid fields Entered!!!" });
  }

//   const users = await User.find({});
//   console.log(users);
  await User.create({      //if same names as that of schema are there it can assign them directly.........
    //triggers password hashing 
    name,
    contactNumber,
    password,
    email,
  })
  
  console.log("sign up success");
  return res.status(200).json({msg : "signup successful!!"});
};


export const handlsUserSignIn = async (req,res) => {
    const {contactNumber , password} = req.body;
    console.log({contactNumber,password});
    if(!contactNumber || !password)
    {
        return res.status(400).json({error : "Missing input fields!!"})
    }
  
    const user = await User.matchedUserAndGenerateToken(contactNumber , password);

    console.log(user);
    if(user.token == null)
    {
        return res.status(400).json({msg : user.msg});
    }

    const token = user.token;
    console.log("Token of user: ",token);
    return res.status(200).cookie('token' , token , { httpOnly: true , secure : false , sameSite : 'Lax' , maxAge: 2 * 60 * 60 * 1000,} ).json({msg : "Sign In succedded" , role : user.role})
}