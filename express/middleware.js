const salaryLogic = (request, response, next) => {
    const salaryURLVariable = request.query.salary;
    if(!salaryURLVariable){
        response.send("No Salary Provided");
    }
    else if(salaryURLVariable < 15000){
        response.send("Salary is below 15K");
    }
    else {
        next();
    }
}

// This is how to export in type CommonJS
module.exports = salaryLogic;
