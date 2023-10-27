import React from 'react'

type productsType={
  name:string,
  url:string,
  price:string,
}

 const ProductCard = (props:productsType) => {

    return (
    <div className='card'>
      <img src={props.url} alt=''/>
      <p>{props.name}</p>
      <p>Price: {props.price}</p>
    </div>
  )
}

//npx create-react-app name --template typescript
export default ProductCard;