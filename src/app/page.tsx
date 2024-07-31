import Carrosel from './componentes/carrosel';
import Loja from './componentes/loja'

import ProductService from './services/productService';
import Product from './models/product';

const products: Product[] = ProductService.all()

export default function Home() {
  return (
    <>
      <Carrosel />
      <Loja products={products} />
    </>
  );
}
