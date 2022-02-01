var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b;
// Function
function cal(s, s1) {
    return s + s1;
}
var result = cal(45, 1);
console.log(result);
// Arrow Fuction
var cal1 = function (s2, s3) { return s2 + s3; };
console.log(cal1(5, 5));
// Spread Operstor
var _c = [1, 2, 3, 4, 5, 6], a = _c[0], b = _c[1], c = _c[2], rest = _c.slice(3);
console.log(a);
console.log(b);
console.log(c);
console.log(rest);
// Destructing
var d, e, f, result1;
(_a = { d: 10, e: 20, f: 30, g: 45, h: 6, i: 5 }, (d = _a.d, e = _a.e, f = _a.f), result1 = __rest(_a, ["d", "e", "f"]));
console.log(d);
console.log(e);
console.log(f);
console.log(result1);
var m, k, result2;
(_b = { m: 10, k: 20, c: 100, d: 500, e: 600 }, (m = _b.m, k = _b.k), result2 = __rest(_b, ["m", "k"]));
console.log(a);
console.log(b);
console.log(result2);
