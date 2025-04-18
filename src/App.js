import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Hello, Gokul!");

  const handleClick = () => {
    setMessage("You clicked the button! 🎉");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{message}</h1>
      <button onClick={handleClick} style={styles.button}>
        Click Me
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  heading: {
    color: '#333',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default App;
