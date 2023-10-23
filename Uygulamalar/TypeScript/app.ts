import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService;

let result: any;
result = _productService.getById(2);

let p = new Product();

p.id = 2;
p.name = "iPhone 15";
p.price = 4000;
p.category = "Smartphone";

_productService.saveProducts(p);
// _productService.deleteProduct(result);
result = _productService.getProducts();


console.log(result);