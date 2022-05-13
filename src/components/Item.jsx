import React from 'react'
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';
import './styles css/Item.css';


const Item = ({ name, price, id, stock, img }) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} productos`);
  };

  return (
    <Link to={`/item/${id}`}>
    <article className="product-card">
      <img className="product-card__image" src={img} alt="" />
       <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">${price}</span>

      <ItemCount stock={stock} onAddProp={onAdd} initial={1} />
    </article>
    </Link>
  );
};

export default Item