import { useState, useEffect } from 'react';
import "./CountButton.css";

export default function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Fetch data from the API or use your existing logic
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.slice(0, 20).map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}