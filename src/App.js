import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './app/store';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Sidebar />
      
    </div>
    </Provider>
  );
    
}

export default App;