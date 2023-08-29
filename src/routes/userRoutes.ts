import {Router} from 'express';
import { PrismaClient } from '@prisma/client';
import { error } from 'console';
const router = Router();
const prisma = new PrismaClient();//now with this prisma we are able to interact with our database 


// Create user 
router.post('/',async (req,res)=>{
    const {email ,name ,username} = req.body;
    try{
        const result = await prisma.user.create({
            data:{
                email,
                name,
                username,
                bio : "Hey i am new on Twitter"
            }
        })
        res.json(result);
    }catch(e){
        res.status(400).json({ error:"username and email should be unique"});
    }
    
    //now hit curl request again
});
//List Users
router.get('/',async (req,res)=>{
    const alluser = await prisma.user.findMany();
    res.json(alluser);
   });
// get one user 
router.get('/:id',async (req,res)=>{
    const {id} =req.params;
    const user = await prisma.user.findUnique({where : {id:Number(id)}});
    res.json(user);
});
   //res.status(501).json({error : `Not implemented : ${id}`});


//Update user
router.put('/:id',async (req,res)=>{
    const {id} = req.params;
    const {name,bio,image} = req.body;
    try{
        const res = await prisma.user.update({
            where : { id : Number(id)},
            data :{
                name,
                bio,
                image
            }

        })
    }catch(e){
        res.status(400).json({error : 'Failed to update the user'})
    }
    //res.status(501).json({error :`Not Implemented :${id}`});
})

//delete user
router.delete('/:id',async (req,res) =>{
    const {id} = req.params;
    await prisma.user.delete({where :{id :Number(id)}});
    res.sendStatus(200);
});

export default router;
