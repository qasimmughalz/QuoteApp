const fs = require("fs");
const http = require("http")

const homePage = fs.readFileSync("home.html" , "utf-8");

const server = http.createServer((req , res) =>{
    if(res.url == "/"){
        res.write();
    }
    res.end(homePage);
})

server.listen(3000,"127.0.0.1" , ()=>{
    console.log("Running on Port 3000");
})