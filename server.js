const express=require('express');
const dotenv =require("dotenv").config();

const app =express();
const port =process.env.PORT || 5000;

/*app.get('/',(req,res) => {
    console.log('Here')
    res.download('server.js')
    

})*/
/*app.get('/api/contacts',(req,res) =>{
    res.status(200).json({message:"Get all contacts"});
})*/
app.use("/api/contacts",require("./routes/contactRoutes"));
app.listen(port,()=>{
    console.log(`Server Started at ${port}`); 
});


