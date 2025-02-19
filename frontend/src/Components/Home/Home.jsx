import React from 'react'
import './Home.css'
import pic from '../../Assets/pic.jpg';

const Home = () => {
  return (
    <div className='container'>
      <div className='body'>
        <div className='pic'>
          <img src={pic} alt='body pic'/>
        </div>
        <div className='intro'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Et deleniti provident vel consequuntur, nisi doloribus, quisquam 
            consequatur veniam, unde asperiores quibusdam ducimus magni? Ratione 
            sint autem odit nesciunt, fugiat nemo!</p>
        </div>

      </div>
      
    </div>
  )
}

export default Home
