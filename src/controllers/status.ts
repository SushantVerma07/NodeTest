import { Router } from 'express';
const router = Router();

router.get('/',(req,res)=>{
    res.send("Checking Status API Result");
});

export default router;
