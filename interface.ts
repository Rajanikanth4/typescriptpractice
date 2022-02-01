interface C{
    man()
}
class D implements C{
    man() {
        console.log("The man is walking")
    }
}
class E extends D{
    eat(){
        console.log("The man is eating")
    }
}
let r=new E;
r.man()
r.eat()