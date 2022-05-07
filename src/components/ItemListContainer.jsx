import React from 'react'
import ItemList from './ItemList';
import './styles css/ItemListContainer.css';

const ItemListContainer = () => {
  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">Todos los Productos</h2>

      <ItemList />
    </section>
  );
};
export default ItemListContainer