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

        
        <Product
        id="123"
        title={"VALORANT CARD 25$"}
        price={"80DT"}
      img="https://www.ubuy.com.pl/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFWRTNPQWtFNkwuX1NMMTUwMF8uanBn.jpg"
         rating={4}
         />

<Product
id="1235"
        title={"NETFLIX CARD 25$"}
        price={"80DT"}
      img="https://i1.wp.com/gsm-flash.com/wp-content/uploads/2019/12/netflix-gift-card-25-usd.png?fit=600%2C600&ssl=1"
         rating={5}
         />

        </div>
          
        <div className='home_row'>
          
        <Product
        id="123454"
        title={"GOOGLE PLAY GIFT CARD 50$"}
        price={"150DT"}
      img="https://www.nicepng.com/png/detail/10-104185_google-play-gift-card-google-play-cards-png.png"
         rating={5}
         />
         <Product
        id="12321111"
        title={"GRAND AUTO THEFT V"}
        price={"120DT"}
      img="https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg"
         rating={4}
         />

         <Product
        id="1236666"
        title={"ROCKET LEAUGE"}
        price={"60DT"}
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/800px-Rocket_League_coverart.jpg"
         rating={4}
         />

          </div>


          <div className='home_row'>
          <Product
        id="12346366"
        title={"COUNTER STRIKE GLOBAL OFFENSIVE"}
        price={"30DT"}
      img="https://m.media-amazon.com/images/M/MV5BYzJjMmM4MDktNTI0OS00ZDNkLTk4YmItMjk0Yjc5NDA5YWM4XkEyXkFqcGdeQXVyNjc0NTEzOTA@._V1_.jpg"
         rating={4}
         />

<Product
        id="12346366"
        title={"FORTINE BUNDEL"}
        price={"184DT"}
      img="https://cdn2.unrealengine.com/intel-fortnite-splash-squadron-bundle-jpg-1920x1080-616067946.jpg"
         rating={4}
         />
          
        </div>
      </div>

  </div>
  );
}

export default Home;
