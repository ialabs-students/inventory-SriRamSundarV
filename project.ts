interface shops {
    name:string;
    count: number;
    id:number;
    
}

class Biscuits implements shops {
    name: string;
    count: number;
    id: number;
    constructor(name: string, count: number, id: number) {
        this.name = name; 
        this.count = count;
        this.id = id;
    }
    
    getAllInfo(): string {
        return "Biscuit name: " + this.name + " Biscuit Count: " +this.count;
    }
    
}
class Chips implements shops{
    name: string;
    count: number;
    id: number;
    constructor(name: string, count: number, id: number) {
        this.name = name; 
        this.count = count;
        this.id = id;
    }
    
    getAllInfo(): string {
        return "Chips name: " + this.name + " Chips Count: " +this.count;
    }
    thresh(num:number){    //Threshold function
        if(num>100){
            let limits= "Enough Stack";
            return limits;
        }
    }
}
// Adding Products
 var app = new Biscuits('Britania', 200, 2);
 console.log(app.getAllInfo());

 var Man = new Biscuits('Sunfeast', 300, 1);
 console.log(Man.getAllInfo());
 
 var car = new Chips('Lays', 400, 3);
 console.log(car.getAllInfo());

 var pot = new Chips('Bingo', 500, 4);
 console.log(pot.getAllInfo());
 
 //Threshold
 let results=pot.thresh(pot.count)
console.log("--Threshold:--");
 console.log(results);
    