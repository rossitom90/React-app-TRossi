import { useEffect, useState } from 'react'

const productos = [
  { id: 1, name: 'buzo1', price: '4500' },
  { id: 2, name: 'buzo2', price: '4500' },
  { id: 3, name: 'buzo3', price: '4500' },
]

const ItemList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    const productsPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 3000)
    })

    productsPromise
      .then((res) => {
        console.log('res: ' + JSON.stringify(res))
        setItems(res)
      })

      .catch((err) => {
        console.log('err: ' + err)
      })

    console.log('trayendo productos...')
  }

  return (
    <div>
      <h1>Componente Item List</h1>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  )
}

export default ItemList
