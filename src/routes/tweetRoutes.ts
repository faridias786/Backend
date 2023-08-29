import { Router } from "express";

const router = Router();
// Create Tweet
router.post('/',(req,res)=>{
   res.status(501).json({error : "Not implemented"});
});
//List Tweet
router.get('/',(req,res)=>{
   res.status(501).json({error : "Not implemented"});
   });
// get one Tweet
router.get('/:id',(req,res)=>{
    const {id} =req.params;
   res.status(501).json({error : `Not implemented : ${id}`});
   });
//Update Tweet
router.put('/:id',(req,res)=>{
    const {id} = req.params;
    res.status(501).json({error :`Not Implemented :${id}`});
})

//delete Tweet
router.delete('/:id',(req,res) =>{
    const {id} = req.params;
    res.status(501).json({error :`Not implemented :${id}`});
});

export default router;

