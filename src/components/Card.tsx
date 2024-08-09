// import React from 'react'
import Photo from "./Photo"
import Description from "./Description"
import Price from "./Price"
import Button from "./Button"

type Props = {}

export default function Card({}: Props) {
  const itemPrice = {
    sale: 149.99,
    regular: 169.99
  }
  const button = "Add to Cart"
  return (
    <div id="main-card">
      <Photo/>
      <div className="allInfo">
        <Description/>
        <Price prices = {itemPrice}></Price>
        <Button button={button}/>
      </div>
    </div>
  )
}