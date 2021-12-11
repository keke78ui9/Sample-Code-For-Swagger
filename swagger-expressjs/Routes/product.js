let express = require('express');
let router = express.Router();

let products = [{
    id: 1,
    name: 'apple',
    price: 2
}, {
    id: 2,
    name: 'banana',
    price: 1.5
}];

router.get('/', (req, res) => {
    res.json(products);
});

router.get('/:id([0-9])', (req, res) => {
    let result = products.filter(_ => _.id == req.params.id);
    if (result.length > 0) {
        res.json(result[0]);
    }
    else {
        badRequest(res);
    }
});

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

function badRequest(res) {
    res.status(400);
    res.json({message: 'Bad Request'});    
}

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

router.delete('/:id', (req, res) => {
    let index = products.findIndex(_ => _.id == req.params.id);
    if (index === null) {
        badRequest(res);
    }

    products.splice(index, 1);
    res.json(products);
})


module.exports = router;