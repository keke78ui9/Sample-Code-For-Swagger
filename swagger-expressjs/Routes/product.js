// https://swagger.io/specification/

const express = require('express');
const router = express.Router();

let products = [{
    id: 1,
    name: 'apple',
    price: 2
}, {
    id: 2,
    name: 'banana',
    price: 1.5
}];

function badRequest(res) {
    res.status(400);
    res.json({message: 'Bad Request'});    
}

/**
 * @swagger
 * definitions:
 *   Product:
 *     properties:
 *       name:
 *         type: string
 *       price:
 *         type: integer
 */

/** 
 * @swagger 
 * /product:
 *   get: 
 *     tags:
 *          - Products
 *     description: Get all Product 
 *     responses:  
 *       200: 
 *         description: Success  
 */ 
router.get('/', (req, res) => {
    res.json(products);
});

/** 
 * @swagger 
 * /product/{id}:
 *   get: 
 *      tags:
 *          - Products
 *      description: Get Product by ID
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Product ID
 *            in: path
 *            required: true
 *            trype: integer
 *      responses:  
 *          200: 
 *              description: Success  
 */ 
router.get('/:id([0-9])', (req, res) => {
    let result = products.filter(_ => _.id == req.params.id);
    if (result.length > 0) {
        res.json(result[0]);
    }
    else {
        badRequest(res);
    }
});

/** 
 * @swagger 
 * /product:
 *   post: 
 *     description: Add product
 *     requestBody:
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  price:
 *                      type: integer
 *     responses:  
 *       200: 
 *         description: Success  
 */ 
router.post('/', (req, res) => {


    if (req.body.name && req.body.price) {
        
        let maxId = Math.max(...products.map((x) => x.id));

        products.push({
            id: ++maxId,
            name: req.body.name,
            price: req.body.price
        });
        res.json(products);
    }
    else {
        badRequest(res);
    }

});

/** 
 * @swagger 
 * /product/{id}:
 *   put: 
 *     description: update product by id
 *     parameters:
 *          - name: id
 *            description: Product ID
 *            in: path
 *            required: true
 *            trype: integer
 *          - name: product
 *            description: Product Object
 *            in: body
 *            required: true
 *            schema:
 *               $ref: '#/definitions/Product'
 *     responses:  
 *          200: 
 *              description: Success  
 */ 
router.put('/:id', (req, res) => {

    if (req.body.name && req.body.price && req.params.id) {
    
        let result = products.find(_ => _.id == req.params.id);
        if (!result) {
            badRequest(res);
        }

        result.name = req.body.name;
        result.price = req.body.price;
        
        res.json(products);
    }
    else {
        badRequest(res);
    }
});

/** 
 * @swagger 
 * /product/{id}:
 *   delete: 
 *     tags:
 *          - Products
 *     description: remove product by id
 *     parameters:
 *          - name: id
 *            description: Product ID
 *            in: path
 *            required: true
 *            trype: integer
 *     responses:  
 *          200: 
 *              description: Success  
 */ 
router.delete('/:id', (req, res) => {
    let index = products.findIndex(_ => _.id == req.params.id);
    if (index === null) {
        badRequest(res);
    }

    products.splice(index, 1);
    res.json(products);
})


module.exports = router;