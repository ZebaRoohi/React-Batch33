
import './App.css'

import Product from './Product.jsx'

function App() {


  return (
    <>
      <h1>Example of react vite</h1>
      <div className='product-align'>
        <Product />
      <Product 
          img=""
          name="Cyxus"
          desc="Non-Slip Fitness Leisure Running Sneakers"
          price="$29"
        />
            <Product
          img="https://shorturl.at/csyB6"
          name="Vitike"
          desc="Latest Men Sneakers -Black"
          price="$100"
        />
        <Product
          img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
          name="Aomei"
          desc="Men's Trend Casual Sports Shoe"
          price="$40"
        />
    </div>

     
    </>
  )
}

export default App
