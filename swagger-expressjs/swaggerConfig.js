// swagger OPENAPI specification https://swagger.io/specification/
const swaggerOptions = {
   swaggerDefinition: {  
        openapi: "3.0.0",     
        info: {  
            title:'Product API',  
            version:'1.0.0',
            description: 'how to use Product API'
        },
   },  
   apis:['./Routes/*.js'],      
};

module.exports = swaggerOptions;