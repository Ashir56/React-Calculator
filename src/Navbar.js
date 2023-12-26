import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <div style={styles.header}>Math Magicians</div>
      <div style={styles.links}>
        <Link to='/home' style={styles.link}>
          Home
        </Link>
        <span style={styles.divider}>|</span>
        <Link to='/calculator' style={styles.link}>
          Calculator
        </Link>
        <span style={styles.divider}>|</span>
        <Link to='/Quote' style={styles.link}>
          Quote
        </Link>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#fff',
    padding: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  header: {
    fontSize: '1.5em',
    fontWeight: 'bold'
  },
  links: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '1em'
  },
  divider: {
    margin: '0 5px',
    color: '#ccc'
  }
};

export default Navbar;
