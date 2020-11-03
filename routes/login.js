const router = require('express').Router();
const pool = require('../config/database');


router.get('/',function(req,res){
    res.render('login.ejs');
});

router.post('/',(req,res)=>{
    console.log("here");
    const {
        username,
        password
    } = req.body;
    var sql="SELECT * FROM login_table WHERE username=? AND password=?";
    pool.query(sql,[username,password],function(err,result){
        if(err)throw err;
        // console.log(result)
        if(result.length>0)
            res.send({code:1,msg:"Username and password found"});
        else
            res.send({code:0,msg:"Username and password not found"})
    });
});

module.exports = router;
