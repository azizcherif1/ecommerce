import React from 'react';
import '../Product.css'

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
  <span>⭐</span>

))}

</div>

 </div>
  {/* <Link className='productCard' to={'/product/${id}'}>   </Link> */}

 

 <img   src={img} alt=""/>
 <button>Ajout au panier</button>


  </div>);




}

export default product;
