import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';

function BusinessList({businesses}){
  // {businesses}(= attribute passed from parant component)

  return(
    <div className={styles.BusinessList}>
      
      {businesses.map((business) => {
        return (
          <Business business={business} key={business.name} />
          // /* props name (we don't pass the whole props to child componet but business(=attribute) to child component) */
        )
        })}
    </div>
  )
}

export default BusinessList;