const express= require('express');
const router=express.Router();
const mysqlconection=require('./db.js');

router.get('/',(req,res)=>{
    mysqlconection.query('SELECT * FROM users',(err,rows)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})
router.get('/:id',(req,res)=>{
    const{id}=req.params;
    mysqlconection.query('SELECT * FROM users WHERE id=?',[id],(err,rows)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err)
        }
    })

})

router.post('/add',(req,res)=>{
    const {nombre}=req.body;
    mysqlconection.query('INSERT INTO users (nombre) VALUES (?)',[nombre],(err,rows)=>{
        if(!err){
            res.json({Status:"Insertado"});
        }else{
            console.log(err)
        }
    })
})


router.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    mysqlconection.query('DELETE FROM users WHERE id=?',[id],(err)=>{
        if(!err){
            res.json({Status:"Usuario eliminado"})
        }else{
            console.log(err)
        }
    })
})
router.put('/modificar/:id',(req,res)=>{
    const {id}=req.params;
    const {nombre}=req.body;
    mysqlconection.query('UPDATE users SET nombre=? WHERE id=?',[nombre,id],(err)=>{
        if(!err){
            res.json({Status:"Usuario editado"})
        }else{
            console.log(err)
        }
    })
})

module.exports=router;