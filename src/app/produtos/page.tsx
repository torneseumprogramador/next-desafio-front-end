import React from 'react';
import Loja from '../componentes/loja';
import ProductService from '../services/productService';
import Product from '../models/product';

const products: Product[] = ProductService.all()

const Produtos: React.FC = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Lista de produtos</h1>
      <Loja products={products} />
    </div>
  );
};

export default Produtos;
