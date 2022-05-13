import React from 'react'


const ItemDetail = ({
    id,
    name,
    category,
    img,
    descripcion,
    price,
  }) => {
    console.log("props", {
      id,
      name,
      category,
      img,
      descripcion,
      price,
    })
  return (
    <div className="detail-row">
    <img src={img} alt={`${id}-${name}`} className="flex-col" />
    <section className="flex-col">
      <h1>{name}</h1>
      <p>{descripcion}</p>
      <h2>${price}</h2>
    </section>
  </div>
  )
}

export default ItemDetail