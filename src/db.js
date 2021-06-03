const mysql= require('mysql');

const mysqlconection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'apinode'
})

mysqlconection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB conectada');
    }
})

module.exports=mysqlconection;