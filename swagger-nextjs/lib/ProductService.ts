class ProductService {

    products: any[];

    constructor() {
        this.products = [{
            id: 1,
            name: 'apple',
            price: 2
        }, {
            id: 2,
            name: 'banana',
            price: 1.5
        }];
    }    

    getAllProducts()  {
        return this.products;
    }
}

export default ProductService;