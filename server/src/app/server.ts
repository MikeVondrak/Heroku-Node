import express from 'express';
const app = express()
const port : string|number= process.env.PORT || 5000;
app.use("*",(req, res) =>{res.send("Test Heroku Node Project</h1>")})
//create a server object:
app.listen(port,() => console.log(`hosting @${port}`));