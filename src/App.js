import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Dashboard2 from './components/dashboards/Dashboard2';
import Dashboard3 from './components/dashboards/Dashboard3';
import Radar from './components/dashboards/Radar';
import Pie from './components/dashboards/Pie';
import Total from './components/dashboards/Total';
import Total2 from './components/dashboards/Total2';
import Total3 from './components/dashboards/Total3';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />    
      <div className="search">
        <input type="text" placeholder="Ask a question about your data" />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="content">
        <Total />
        <Dashboard /> 
        <Dashboard2/> 
        <Total2 />
        <Dashboard3/> 
        <Radar/>
        <Total3 />
        <Pie/>
      </div>
    </div>
  );
}

export default App;
