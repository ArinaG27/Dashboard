import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faComments, faCheckSquare, faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Dashboard</div>
      <ul className="nav-items">
        <li>
          <FontAwesomeIcon icon={faFile} />
          <span>File</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faComments} />
          <span>Chat in Teams</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCheckSquare} />
          <span>Comment</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUserPlus} />
          <span>Subscribe</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faEdit} />
          <span>Edit</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
