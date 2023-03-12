import { Price } from './Price';

interface ProductsProp {
  selectedProducts: Product[];
  setSelectedProducts: (products: Product[]) => void;
}

export function Products(props: ProductsProp) {
  const { selectedProducts, setSelectedProducts } = props;

  const products: Product[] = [
    {
      id: 1,
      name: 'T-Shirt',
      price: 2000,
    },
    {
      id: 2,
      name: 'Pant',
      price: 3200,
    },
    {
      id: 3,
      name: 'Skirt',
      price: 3960,
    },
    {
      id: 4,
      name: 'Sweater',
      price: 4900,
    },
    {
      id: 5,
      name: 'Iphone 14',
      price: 3300,
    },
    {
      id: 6,
      name: 'Macbook M1',
      price: 5003,
    },
    {
      id: 7,
      name: 'Macbook M2',
      price: 5605,
    },
    {
      id: 8,
      name: 'Book',
      price: 940,
    },
  ];

  function onSelect(product: Product): void {
    const idx = selectedProducts.findIndex((it) => it.id === product.id);
    if (~idx) {
      setSelectedProducts([
        ...selectedProducts.slice(0, idx),
        ...selectedProducts.slice(idx + 1),
      ]);
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  }

  return (
    <div className="products">
      {products.map((it) => (
        <div key={it.id} className="product">
          <img src="https://picsum.photos/200/300" alt="Product" />
          <div className="description">
            <span className="name">{it.name}</span>
            <Price value={(it.price / 100).toFixed(2)} />
          </div>
          <button className="select" onClick={() => onSelect(it)}>
            {selectedProducts.find((product) => product.id === it.id)
              ? 'Remove ❌'
              : 'Select ✔️'}
          </button>
        </div>
      ))}
    </div>
  );
}
