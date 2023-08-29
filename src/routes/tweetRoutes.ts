import { Router } from "express";
import { PrismaClient } from "@prisma/client";


const router = Router();
const prisma = new PrismaClient();

// Create Tweet
router.post('/',async (req,res)=>{
    const {content , image , userId} = req.body;
    try{
        const result = await prisma.tweet.create({
            data : {
                content,
                image,
                userId 
            }
        })
        res.json(result);

    }catch(e){
        res.status(400).json({error : "Not created"})
    }

   //res.status(501).json({error : "Not implemented"});
});
//List Tweet
router.get('/',async (req,res)=>{
    const alltweet = await prisma.tweet.findMany();
    res.json(alltweet);
   //res.status(501).json({error : "Not implemented"});
   });
// get one Tweet
router.get('/:id',async (req,res)=>{
    const {id} =req.params;
    const tweets = await prisma.tweet.findUnique({where : {id : Number(id)}});
    if (!tweets){
        res.status(404).json({error : "Tweet not found"});
    }
    res.json(tweets);
   //res.status(501).json({error : `Not implemented : ${id}`});
   });
//Update Tweet
router.put('/:id',(req,res)=>{
    const {id} = req.params;
    res.status(501).json({error :`Not Implemented :${id}`});
})

//delete Tweet
router.delete('/:id',async(req,res) =>{
    const {id} = req.params;
    await prisma.tweet.delete({where : {id :Number(id)}})
    res.sendStatus(200)
    //res.status(501).json({error :`Not implemented :${id}`});
});

export default router;

