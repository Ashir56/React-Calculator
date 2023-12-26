// Quote.js

import React from 'react';

const Quote = () => {
  const mathQuotes = [
    'Pure mathematics is, in its way, the poetry of logical ideas. - Albert Einstein',
    'Mathematics is the key and door to the sciences. - Galileo Galilei',
    'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater. - Albert Einstein',
    'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country. - David Hilbert',
    'The only way to learn mathematics is to do mathematics. - Paul Halmos',
    'Mathematics is the most beautiful and most powerful creation of the human spirit. - Stefan Banach',
    'In mathematics, the art of proposing a question must be held of higher value than solving it. - Georg Cantor',
    'The essence of mathematics is not to make simple things complicated, but to make complicated things simple. - S. Gudder',
    'Mathematics is the music of reason. - James Joseph Sylvester',
    'Mathematics is the tool specially suited for dealing with abstract concepts of any kind. - Eugene Wigner'
  ];

  return (
    <div style={styles.content}>
      <h2>Mathematics Quotes</h2>
      <ul style={styles.quotesList}>
        {mathQuotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  content: {
    padding: '20px'
  },
  quotesList: {
    listStyleType: 'none',
    padding: 0
  }
};

export default Quote;
