import React from 'react';
import './Product.css'

function product({title,img,price,rating}) {
  return (
    <div className='product'>
    <div className='product_info'>
<p> {title}</p>

  <p className='product_price'>

      <strong>{price}</strong>
 
</p>
<div className='product_rating'>
{ Array(rating)

.fill()
.map((_,i) => (
  <p>⭐</p>

))}

</div>


    </div>

    <img src={img} alt=""/>
   
  
  
  <button>Ajout au panier</button>


</div>);

}

export default product;
