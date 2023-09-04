import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar(){
  const [ term, setTerm  ] = useState(null);
  const [ location, setLocation  ] = useState(null);
  const [ sortBy, setSortBy  ] = useState("Best Match");

  const handleTermChange = (event)=> {
    setTerm(event.target.value)
  }
  const handleLocationChange = (event)=> {
    setLocation(event.target.value)
  }
  const handleSortByClick = (option)=> {
    setSortBy(option)
  }


  const getSoryByClass = (option) =>{
    return sortBy===option?styles.active: ""
  }

  const renderSortByOptions = () =>{
    return Object.keys(sortByOptions).map(
      (option)=> {
        const sortByOptionsValue = sortByOptions[option]
        return(
          <li className ={getSoryByClass(option)} key={sortByOptionsValue} onClick={()=> {handleSortByClick(option)}}>{option}</li>
          )
      }
    )    
  }

  const handleSearchClick = ()=> {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
  }



    
    return(
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul> 
      </div>
      <div className={styles.SearchBarFields}>
        <input placeholder='Search Business' onChange={handleTermChange}/>
        <input placeholder='Where?' onChange={handleLocationChange}/>
      </div>
      <div className={styles.SearchBarSubmit}>
        <button type='submit' onClick={handleSearchClick}>Let's Go</button>
      </div>
    </div>
    )
}
export default SearchBar