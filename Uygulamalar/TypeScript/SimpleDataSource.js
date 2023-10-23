"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "iPhone 11", "Smartphone", 1000), new Product_1.Product(2, "Samsung S10", "Smartphone", 800), new Product_1.Product(3, "Huawei P30", "Smartphone", 700), new Product_1.Product(4, "iPad Pro", "Tablet", 900), new Product_1.Product(5, "Macbook Pro", "Laptop", 1200));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
