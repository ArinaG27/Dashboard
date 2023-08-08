import React, { useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import storeDataJSON from '../../convertcsv.json';

const Pie = () => {
  useEffect(() => {
    if (storeDataJSON) {
      const ctx = document.getElementById("myChart3").getContext("2d");
      ctx.canvas.parentNode.style.height = '400px';
      ctx.canvas.parentNode.style.width = '400px';
      new ChartJS(ctx, {
        type: "pie",
        data: {
          labels: storeDataJSON.map(store => store.storename),
          datasets: [
            {
              label: 'Stock',
              data: storeDataJSON.map(store => store.stock),
              backgroundColor: ['rgba(210, 180, 140)',
              'rgb(128, 128, 128)',
              'rgb(192, 192, 192)',
              'rgb(34, 139, 34)',
              'rgb(60, 179, 113)',
              'rgb(47,79,79)',
              'rgb(175, 238, 238)',
              'rgb(255, 182, 193)',
              'rgb(100, 149, 237)',
              'rgb(188, 143, 143)',
              'rgb(107, 142, 35)',
            ],
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
      <h3>Stock</h3>
      <div>
        <canvas id="myChart3" width="200px" height="200px"/>
      </div>
    </div>
  );
};

export default Pie;