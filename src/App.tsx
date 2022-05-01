import React from 'react';
import Results from './Components/Results';
import { ReactQueryDevtools } from 'react-query/devtools';


function App() {

  return (
    <>
      <div>
        <Results />
       </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
