import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import './styles css/ItemListContainer.css';
import { data } from '../data/Productos.js';
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  const filterByCategory = (data) => {
    return data.filter(item => {
      return item.category.toLowerCase() === categoryId.toLowerCase()
    })
  }

  const getProductos = async () => {
    try {
      let result = await getProducts;
      console.log('categoryId', categoryId)
      if (categoryId) {
        result = filterByCategory(result);
      }
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  useEffect(() => {
    getProductos();
  });

  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">Todos los Productos</h2>

      <ItemList products={products} />
    </section>
  );
};
export default ItemListContainer