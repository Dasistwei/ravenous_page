import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar(){
  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  const renderSortByOptions = () =>{
    return Object.keys(sortByOptions).map(
      (option)=> {
        const sortByOptionsValue = sortByOptions[option]
        return(
          <li key={sortByOptionsValue}>{option}</li>
        )
      }
    )    
  }
    
    return(
    <div className={styles.SearchBar}>
      <h1>Search bar</h1>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul> 
      </div>
      <div className={styles.SearchBarFields}>
        <input placeholder='Search Business'/>
        <input placeholder='Where?'/>
      </div>
      <div className={styles.SearchBarSubmit}>
        <a>Let's Go</a>
      </div>
    </div>
    )
}
export default SearchBar