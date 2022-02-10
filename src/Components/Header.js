import React from 'react';
import '../Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';


function Header() {
  return (
  
    <div className='header'>
        <img className="header_logo" src="https://serving.photos.photobox.com/131610209e38e23b9bd8cea9d83cf04cac3443d5e75c6ee87d130110f2212034338d128f.jpg"

alt=""/>

<div className='header_search'>
    <input className='header_searchInput' type="text"/>
<SearchIcon className='header_searchIcon'/>
    </div>

    <div className='header_nav'>
      <Link to='/login'>
        <div className='header_option'>
<span className='header_optionone'>Hello User</span>
<span className='header_optiontwo'>Sign In</span>
        </div>
        </Link>


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
