import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import Home from './pages/Home';
import About from './pages/About';
import Index from './pages/Index';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  
  return (
    <Routes>
      <Route path='/' element={<LoadingPage setLoading={setLoading}/>}/>
      {/* <Route path='/' element={loading ? <LoadingPage setLoading={setLoading}/> : <Index />} /> */}
      {/* <Route path='/' element={loading ? <LoadingPage /> : <About />} /> */}
    </Routes>
  );
}

export default App;