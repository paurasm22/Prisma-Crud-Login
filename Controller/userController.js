import prisma from "../DB/db.congfig.js";

export const createUser = async(req,res)=>{
const {name,email,password} = req.body
const findUser = await prisma.user.findUnique({
  where:{
    email:email
  }
})
if (findUser){
  return res.json({status:400,message:"Email Already Exists ! "})
}
const newUser =await  prisma.user.create({
  data:{
    name:name,
    email:email,
    password:password
  }
})
return res.json({status:200,message:"New User Created",newUser})
}


export const  updateUser=async(req,res)=>{
  const userId = req.params.id
  const {name,email,password} = req.body
  const update = await prisma.user.update({
    where:{
      id:Number(userId)

    },
    data:{
      name:name,
      email,password
    }
  })
 return res.json({status:200,message:"Record updated",update})
}

export const fetchAllUsers = async(req,res)=>{
  const users = await prisma.user.findMany({});
return res.json({status:200,message:'All users retrieved',users})

}


export const showUser=async(req,res)=>{
  const userId = req.params.id
const getUser = await prisma.user.findFirst({
where:{
  id:Number(userId)
}
})
return res.json({status:200,message:"User Retrieved",getUser})
}

export const deleteUser = async(req,res)=>{
  const userId = req.params.id
  const del = await prisma.user.delete({
    where:{
      id:Number(userId)
    }
  })
  return res.json({status:200,"message":"Record Deleted",del})
}