import React, { useState } from 'react';
const withCounter = (OriginalComponent,incrementBy=1) => {
  return function NewComponent(props) {
    const [count, setCount] = useState(0);
    return (
      <OriginalComponent
        {...props}
        count={count}
        incrementCount={() => setCount(count +incrementBy )}
      />
    );
  };
};
export default withCounter;