import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';

function App() {
  const [category, setCategory] = useState('top');

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
}

export default App;
