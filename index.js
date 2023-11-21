const express = require("express");
const App = express();

// For All Over the Application
const MiddleWare1 = (req, res, next)=>{
    console.log("First Middle Ware Running....");
    next();
}

//Only Applicable for "/user/:name" and "/about/:name" specific routes
const MiddleWare2 = (req, res, next)=>{
    console.log("Second Middle Ware Running....");
    next();
}

App.use(MiddleWare1)
App.get("/", (request, response)=>{
    return response.send("<div><h1>HOME PAGE</h1> <p>Search With This Url :http://localhost:5000/user/Mahi</p><p>Search With This Url :http://localhost:5000/about/Anshuman</p></div>");
});

App.get("/user/:name",MiddleWare2, (request, response)=>{
    return response.send(`<h3>Name of User : ${request.params.name}</h3>`);
});

App.get("/about/:name",MiddleWare2, (request, response)=>{
    return response.send(`<h3>About of : ${request.params.name}</h3>`);
});

App.listen(5000)

