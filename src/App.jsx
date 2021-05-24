import React, { useState } from 'react';
import Header from './components/header';
import Main from './components/main';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <>
      <Header userName={userName} setUserName={setUserName} />
      <Main />
    </>
  );
}

export default App;
