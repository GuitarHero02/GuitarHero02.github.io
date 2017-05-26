var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/template', (req, res)=>{
  res.render('temp', {time:Date(), title:'Jade'});
});

app.get('/form', (req, res)=>{
  res.render('form');
});

app.get('/dynamic', (req, res)=>{
  var lis = '';
  for(var i=0;i<5;i++){
    lis += '<li>coding</li>';
  }

  var time = Date();
  var output = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    Hello, Dynamic!
    <ul>
      ${lis}
    </ul>
    ${time}
  </body>
</html>
  `;
  res.send(output);
});

app.get('/',(req, res)=>{
  res.send('Hello home page');
});

app.get('/route',(req, res)=>{
  res.send('Hello Router, <img src="/route.jpg">');
});

app.get('/login', (req, res)=>{
  res.send('<h1>Login please</h1>');
});

app.listen(3000, ()=>{
  console.log('Connected 3000 port');
});
