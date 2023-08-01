const express=require('express') ;
const cors=require("cors") ;
const mysql=require("mysql") ;
const app=express() ;
app.use(cors()) ;
app.use(express.json()) ;
 
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sampat123",
    database : "users"

})

app.get("/",(req,res)=>
{
    
    const sql="SELECT*FROM employees" ; 
    db.query(sql,(err,data)=>
    {
        if (err)return res.json("Error") ;
        else
        return res.json(data) ;
    });
});

app.post('/create',(req,res)=>{
    const sql="INSERT INTO employees(`name`,`email`) VALUES (?)" ;
    console.log(req.body) 
    const values =[
        req.body.name,
        req.body.email
    ]
    db.query(sql,[values],(err,data)=>
    {
        if(err)
        return res.json(err) ;
        else
        return res.json(data) ;
    }) 
}) ;
app.put('/update',(req,res)=>{
    const sql="UPDATE employee SET `name`=? `email`=? WHERE id=? ;"
    console.log(req.body) 
    const values =[
        req.body.id,
        req.body.name,
        req.body.email

    ]
    const id=req.params.id 
    db.query(sql,[values],(err,data)=>
    {
        if(err)
        return res.json(err) ;
        else
        return res.json(data) ;
    }) 
}) ;

app.listen(8081,()=>{
    console.log("listening") ; 
}

)