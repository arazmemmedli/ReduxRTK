import React from 'react';
import DisplayList from './components/displayList';
import Search from './components/search';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="w-full block">
        <div className="max-w-6xl mx-auto px-[15px]">
          <Search />
          <DisplayList />
        </div>
      </div>
    </div>
  );
}

export default App;
