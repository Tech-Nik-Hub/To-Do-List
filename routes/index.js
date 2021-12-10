const express=require('express');
const router=express.Router();
const controller=require('../controllers/home_controller');



router.get('/',controller.home);


router.post('/create-task',controller.post);


router.get('/delete-icon/',controller.delete);





module.exports=router;