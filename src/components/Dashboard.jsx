import React, { useState, useEffect } from 'react';
import '../styles.css';
import storeDataJSON from '../convertcsv.json';

const Dashboard = () => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    setStoreData(storeDataJSON);
    console.log('Loaded data:', storeDataJSON);
  }, []);
  
 
  return (
    <div>
      <h3>Preis</h3>
      <div className="bar-chart">
        {storeData.map(store => (
          <div key={store.price} className="bar">
            <div className="bar-fill" style={{ height: `${store.price + 30}px`, fontSize: '10px', textAlign: 'center', backgroundColor: 'cornFlowerBlue'  }}>{store.price}</div>
            <span className="bar-label" style={{ fontSize: '10px', textAlign: 'center' }}>{store.storename}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
