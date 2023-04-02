import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("Hello dear one, Learning React...?");

  useEffect(() => {
    console.log('useEffect hook called');
    const timer = setTimeout(() => {
      setMessage("Great.... This is time to learn about HOOKS");
    }, 2000);
    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;