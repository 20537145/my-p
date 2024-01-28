import React from 'react'
import ProductsList from '../components/ProductsList'
import { Link } from 'react-router-dom'


function HomePage() {
  // const [animateOut, setAnimateOut] = useState(false);

  // const handleMouseLeave = () => {
  //   setAnimateOut(true);
  //   setTimeout(() => {
  //     setAnimateOut(false);
  //   }, 250);
  // };
  return (
    <div>
   <div className="middle-background">
    <h6>hello to this mf website</h6>
    <h1>hello to this mf website</h1>
    <Link to='products'>
    <button className='button' >SHOP NOW</button>
    </Link>
   </div>
   <section>
    <div className='empty-section'>
      <h2>Bienvenue à H Royal Meuble</h2>
    <p className='home-text'>Votre guichet unique pour des meubles et une décoration élégants, proposant les dernières tendances exclusivement à Perth.</p>
    </div>
   </section>
   <section className='categeory-container'>
    <div>
   

    </div>
   </section>
   <ProductsList/>
    </div>
  )
}

export default HomePage