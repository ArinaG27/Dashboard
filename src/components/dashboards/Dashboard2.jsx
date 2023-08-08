import React, { useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import storeDataJSON from '../../convertcsv.json';

const Dashboard2 = () => {
  useEffect(() => {
    if (storeDataJSON) {
      const ctx = document.getElementById("myChart").getContext("2d");
      
      new ChartJS(ctx, {
        type: "line",
        data: {
          labels: storeDataJSON.map(store => store.storename),
          datasets: [
            {
              label: 'Price Flexibele slangen',
              data: storeDataJSON.map(store => store.price),
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            },
          ],
        },
      });
    }
  }, []);

  return (
    <div className="dashboard">
      <h3>Price Flexibele slangen</h3>
      <div className="line-chart">
        <canvas id="myChart" />
      </div>
    </div>
  );
};

export default Dashboard2;




