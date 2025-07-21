import { catalog } from '../../utils/catalog';
import ProductCard from './ProductCard';

const ProductsContainer = () => {
  return (
    <section className='container flex flex-wrap mx-auto p10 justify-center gap-10'>
      {catalog.map((product) => (
        <ProductCard {...product} />
      ))}
    </section>
  );
};

export default ProductsContainer;
