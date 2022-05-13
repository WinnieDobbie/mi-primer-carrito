import React from 'react';
import Item from './Item';
import './styles css/ItemList.css';

const ItemList = ({products}) => {

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