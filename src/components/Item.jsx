import React from 'react'
import ItemSate from './ItemSate.jsx';
import './styles css/Item.css';


const Item = ({ name, price, id, stock, img }) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} productos`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={img} alt="" />
       <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">${price}</span>

      <ItemSate stock={stock} onAddProp={onAdd} initial={1} />
    </article>
  );
};

export default Item