import { Product } from "./Product";

export class SimpleDataSource {
	private products: Array<Product>;

	constructor () {
		this.products = new Array<Product>(
			new Product(1, "iPhone 11", "Smartphone", 1000),
			new Product(2, "Samsung S10", "Smartphone", 800),
			new Product(3, "Huawei P30", "Smartphone", 700),
			new Product(4, "iPad Pro", "Tablet", 900),
			new Product(5, "Macbook Pro", "Laptop", 1200)
		);
	} 
	getProducts(): Product[] {
		return this.products;
	}
}