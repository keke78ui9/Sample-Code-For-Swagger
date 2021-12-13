const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const product = require('./Routes/product');
const swaggerOptions = require('./swaggerConfig');



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDocs = swaggerJSDoc(swaggerOptions);  
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));  
app.get('/swagger', function(req, res) {
   res.setHeader('Content-Type', 'application/json');
   res.send(swaggerDocs);
 });

app.use('/product', product);

app.get('/', (req, res) => {
   res.send('');
});

app.listen(3000);
