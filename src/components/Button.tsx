import React, {useState} from 'react'

import cart from "/Users/sean_h/development/frontEnd/product-preview-card-component/images/icon-cart.svg"

type Props = {
  button: string
}

export default function Button({button}: Props) {
const count = 0
const [orders, setOrders] = useState<number>(count)
const orderClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
  setOrders(prevOrders => prevOrders +1 )
  if (orders < 1){
    alert("Order has been placed")
  } else if (orders > 1) {
    alert(`Order has been placed ${orders} times`)
  }
}
console.log(orders)

  return (
    <div className='button'>
    <button id='addB' onClick={orderClick}><img src={cart} id='cart'/>{button}</button>
    </div>
  )
}