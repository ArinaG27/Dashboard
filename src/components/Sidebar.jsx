import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faHistory, faPlus, faDatabase, faBullseye, faTh, faUserFriends, faCompass, faBook, faBriefcase, faChartBar } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><FontAwesomeIcon icon={faHome} /> Home</li>
        <li><FontAwesomeIcon icon={faStar} /> Favorites</li>
        <li><FontAwesomeIcon icon={faHistory} /> Recent</li>
        <li><FontAwesomeIcon icon={faPlus} /> Create</li>
        <li><FontAwesomeIcon icon={faDatabase} /> Datasets</li>
        <li><FontAwesomeIcon icon={faBullseye} /> Goals</li>
        <li><FontAwesomeIcon icon={faTh} /> Apps</li>
        <li><FontAwesomeIcon icon={faUserFriends} /> Shared with me</li>
        <li><FontAwesomeIcon icon={faCompass} /> Discover</li>
        <li><FontAwesomeIcon icon={faBook} /> Learn</li>
        <li> ... </li>
        <li><FontAwesomeIcon icon={faBriefcase} /> Workspaces</li>
        <li><FontAwesomeIcon icon={faChartBar} /> Sales and Marketing</li>
      </ul>
    </div>
  );
};

export default Sidebar;

