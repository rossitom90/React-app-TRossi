import React from 'react'
import ItemList from './itemlist'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="m-5">
      <h1>{greeting}</h1>
      <ItemList />
    </div>
  )
}

export default ItemListContainer
