let express = require('express');
let product = require('./Routes/product');

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/product', product);

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);
