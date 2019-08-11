const express = require('express');
const sql = require('mssql');
const PORT = 3001;

const app = express();

const sqlConfig = {
    user: 'sa',
    password: 'PASSWORD_HERE',
    server: 'localhost', 
    database: 'DATABASE_NAME_HERE' 
};

app.get('/',function(req,res){
    let connection = sql.connect(sqlConfig,(err)=>{
        if(err){
            console.log(err)
        }else {
            res.send('DB Connected');
            //code for sql request here.
        }

    })
})

app.listen(PORT,function(){
    console.log(`Server started at ${PORT}`)
})