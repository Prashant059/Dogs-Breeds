import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/dataList';
import ItemDetail from './components/dataDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/breed/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
