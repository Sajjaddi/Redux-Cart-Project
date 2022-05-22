import MenuItem from "./MenuItem";

const ProductMenu = () => {
  const DUMMY_ITEM = [
    {id: 'b1', name: 'My First Book', description: 'The first book I ever wrote', price: 6.00},
    {id: 'b2', name: 'My Second Book', description: 'The Second book I ever wrote', price: 8.00}
  ]
  return (
    <section className="product-menu">
      <h2>Buy Your Favorite Products</h2>
      <ul>
        {DUMMY_ITEM.map(item => (
          <MenuItem key={item.id} id={item.id} name={item.name} price={item.price} description={item.description}/>
        ))}
      </ul>
    </section>
  );
};

export default ProductMenu;
