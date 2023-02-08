const express = require('express')
const app = express()
console.log("on")
app.get('/nome', function (req, res) {
    let nome;
    nome= req.query.nome;
    console.log("Ciao  "+ nome);
    res.send("Ciao " + nome)
});
app.get('/somma', function (req, res) {
    let a=req.query.a;
    let b;
    a= req.query.a;
    b= req.query.b;
    let c=a-(-b);
    res.send("somma " + c);
});
app.get('/sottrazzione', function (req, res) {
    let a=req.query.a;
    let b=req.query.b;
    let c=a-b;
    res.send("sottrazzione " + c);
});
app.get('/moltiplicazione', function (req, res) {
    let a=req.query.a;
    let b=req.query.b;
    let c=a*b;
    res.send("moltiplicazione " + c);
});
app.get('/divisione', function (req, res) {
    let a=req.query.a;
    let b=req.query.b;
    let c=a/b;
    res.send("divisione " + c);
});
app.get('/uppercase', function (req, res) {
    let str;
    str= req.query.str;
    str=str.toUpperCase();
    res.send("parola: " + str);
});
app.listen(3000);