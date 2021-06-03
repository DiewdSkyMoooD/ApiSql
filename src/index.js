const express= require('express');
const app=express();

//Config
app.set('port', process.env.PORT||3000)

//Middlewares
app.use(express.json())
//Routes
app.use(require('./users.js'))

app.listen(app.get('port'),()=>{
    console.log("en puerto",app.get('port'));
})