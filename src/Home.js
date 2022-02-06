import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {

  return (
  <div className='home'>
      <div className='home_container'>
        <img 
        className='home_image' src='https://serving.photos.photobox.com/14635621607c6863591886027321893fed57c9ecf619095f38910258b210eda3f0cc71e4.jpg'
        alt=''
        
        />
        <div className='home_row'>

        <Product />
        <Product />

        </div>
          
        <div className='home_row'>
          
          
          </div>


          <div className='home_row'>
            
          
        </div>
      </div>

  </div>
  );
}

export default Home;
