const express = require("express");
const salaryLogic = require("./middleware");

const app = express();

app.use(salaryLogic);

app.get("/", (request, response) => {
    response.send("Home");
})

app.get("/about", (request, response) => {
    response.send("About");
})

// query
app.get("/services", (request, response) => {
    const nameURLProperty = request.query.name;
    if(nameURLProperty){
        response.send(`Welcome ${nameURLProperty}`);
    }
    else {
        response.send("Services");
    }
})

app.get("/products", (request, response) => {
    response.send(`This is my Products API`);
})

// param
app.get("/products/:title", (request, response) => {
    const titleURLParamProperty = request.params.title;
    response.send(`This is my ${titleURLParamProperty} Product API`);
})

app.listen(2000, () => {
    console.log("Server is Started");
})




