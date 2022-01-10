interface Product {
    id: number;
    name: String;
    price: number;
}

class ProductService {

    products: Product[];

    private static instance: ProductService;

    private constructor() {
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

    public static Instance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }

        return ProductService.instance;
    }

    getAllProducts(): Product[]  {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        let result = this.products.filter(_ => _.id === id);
        if (result.length > 0) {
            return result[0];
        }
        return undefined;
    }

    addProduct(product: Product) {
        let maxId = Math.max(...this.products.map((x) => x.id));
        
        this.products.push({
            id: ++maxId,
            name: product.name,
            price: product.price
        });

        return this.products;
    }

    updateProduct(id: number, newProduct: Product) : Product | undefined{
        let result = this.products.find(_ => _.id === id);
        if (!result) {
            return undefined;
        }

        result.name = newProduct.name;
        result.price = newProduct.price;

        return result;
    }

    deleteProduct(id: number) : Product[] | undefined{
        let index = this.products.findIndex(_ => _.id === id);
        if (!index) {
            return undefined;
        }

        this.products.splice(index, 1);

        return this.products;
    }
}

export default ProductService;