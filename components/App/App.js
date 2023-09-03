import React from 'react';
import styles from './App.module.css'

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {

  const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  };
  // an object with mutiple keys and values

  const businesses = [business, business, business, business];

  return (
    <div className={styles.App}>
      <h1>ravanous</h1>
       <SearchBar />
       <BusinessList businesses={businesses}/>
       {/* {{pass businesses(=an array with multi business (= objects) )}}{===businesses} 
        to BusinessList component(child component) businesses(= attribute name) */}
    </div>
  );
}

export default App;
