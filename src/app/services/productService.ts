import productsMock from '../mocks/ productsMock';
import Product from '../models/product';

export default class ProductService {
    static all(): Product[]{
        return productsMock as Product[];
    }

    static getById(id: number): Product{
        return productsMock.find(p => p.id === id) as Product
    }
}