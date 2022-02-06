import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
  
    <div className='header'>
        <img className="header_logo" src="https://logos-marques.com/wp-content/uploads/2021/03/Amazon-logo.png"

/>

<div className='header_search'>
    <input className='header_searchInput' type="text"/>
<SearchIcon className='header_searchIcon'/>
    </div>

    <div className='header_nav'>
        <div className='header_option'>
<span className='header_optionone'>Hello User</span>
<span className='header_optiontwo'>Sign In</span>

        </div>

        <div className='header_option'>
        <span className='header_optionone'>Return</span>
        <span className='header_optiontwo'>Orders</span>

            </div>

            <div className='header_option'>
            
            <span className='header_optionone'>Get</span>
            <span className='header_optiontwo'>Premium</span>
            </div>

  <div  className='header_optionBasket' >
<ShoppingBasketIcon/>
<span className='header_optiontwo header_basketcount'>0</span>

    </div>

    </div>
    </div>
  );    
  
  }
   


export default Header;
