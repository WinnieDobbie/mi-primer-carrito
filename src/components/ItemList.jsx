import React, {useState, useEffect} from 'react';
import Item from './Item';
import { data } from '../data/Productos.js';
import './styles css/ItemList.css';

const ItemList = () => {

  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  const getProductos = async () => {
    try {
      const result = await getProducts;
      console.log('result', result)
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  useEffect(() => {
    getProductos();
  }, []); 

  return (
    <div className="product-list-container">
      {
        
        products.length ? (
          <>
            {
              products.map((product) => {
                return (
                  <div key={product.id}>
                    <Item
                      name={product.name}
                      img={product.img}
                      price={product.price}
                      id={product.id}
                      stock={product.stock}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Loading...</p>
        )
      }
    </div>
  );
};


export default ItemList