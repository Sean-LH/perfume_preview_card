import React from 'react'

type Prices = {
  prices:{
    sale: number
    regular: number
  }
}
///// The name 'prices' on line 4 needs to be the same as the prop name on the app.tsx file
export default function Price({prices}: Prices) {
  return (
    <div className='price'>
      <p id='sale'>${prices.sale}</p>
      <p id='regular'>${prices.regular}</p>
    </div>
  )
}