var express=require("express");
var router=express.Router();

router.get('/',function(req,res){res.send('get route on things')});
router.post('/',function(req,res){res.send('post route on things')});

module.exports=router;