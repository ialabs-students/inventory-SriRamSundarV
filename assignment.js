const express = require('express');
const exp = express();
exp.use(express.json());

//Function for next parameter
var name_validate=(request,response, next)=>{
    var data=request.body;
    if(data.Name==undefined){
        response.status(400);
        response.send("No name is provided");
    }
    next();
};

exp.listen(8000,()=>{
    console.log("Local Host :8000 SERVER IS RUNNING");
});

const Emp=[{"Name":"Vijay","Age":48,"E_mail":"vijay576@gmail.com"},
{"Name":"Ram","Age":30,"E_mail":"ram@gmail.com"},
{"Name":"Ravi","Age":25,"E_mail":"ravi3232@gmail.com"}
];

//GET CALL
exp.get("/emp",(request,response)=>{
    response.send(Emp);
    });

//POST CALL
exp.post("/add/obj",name_validate,(request,response)=>{
    const new_employee={
        "Name":request.body.Name,
        "Age":request.body.Age,
        "E_mail":request.body.E_mail
    }
    console.log(request.body);
    Emp.push(new_employee);
    response.send("Employee created");
    });

exp.put("/put/obj",(request,response)=>{
    for(let e of Emp){
        if(e.Name==request.body.Name){
            e.Name="Sriram"
        }
    }
    response.send(Emp);
})

exp.delete("/delete/obj/",(request,response)=>{
    for(let e in Employee){
        if(Emp[e].Name=="Ram"){
            delete Emp[e];
        }
    }
    response.send(Emp);
})

exp.get("/find/obj/",(request,response)=>{
    for(let e in Emp){
        if(Emp[e].Name=="Ravi"){
            response.send(Emp[e]);
        }
    }
})
