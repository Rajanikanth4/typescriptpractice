class A{
    price:number
    constructor(price:number){
        this.price=price
    }
}
class B extends A{
    brand:string
    constructor(price:number, brand:string){
        super(price)
        this.brand=brand
    }
    car(){
        console.log("The brand of car is : " + this.brand)
        console.log("The value of car is : " + this.price)
    }
}
let m=new B(200000, "benz")
m.car();