// Function
function cal(s, s1){
    return s+s1;
}
let result=cal(45, 1);
console.log(result)

// Arrow Fuction
let cal1=(s2, s3)=>s2+s3;
console.log(cal1(5,5))

// Spread Operstor
let [a,b,c,...rest]=[1,2,3,4,5,6]
console.log(a)
console.log(b)
console.log(c)
console.log(rest)

// Destructing
let d,e,f,result1
 ({d, e, f,...result1}={d:10, e:20, f:30, g:45, h:6, i:5})
console.log(d)
console.log(e)
console.log(f)
console.log(result1)

