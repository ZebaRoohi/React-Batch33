import React, { useEffect, useState } from 'react';
const InitializeStateOnMount = () => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    // Run initialization logic on mount
    setInitialized(true);
    // Cleanup function (optional), runs before the next effect or when the component unmounts
    return () => {
      console.log('Cleanup on unmount');
    };
  }, []); // Empty dependency array means the effect runs once after the initial render
  return (
    <div>
      <h2>Initialize State On Mount Example</h2>
      <p>Component is {initialized ? 'initialized' : 'not initialized'}</p>
    </div>
  );
};
export default InitializeStateOnMount;
