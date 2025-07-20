import React from 'react';
import { HashRouter } from 'react-router-dom';

import ProductsDropdown from './components/machinesDropDown';
function App() {
  return (
    <div style={{ 
        position: 'absolute', // or remove 'position' entirely
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '1500px',
        padding: '40px',
        boxSizing: 'border-box',
        background: '#fff',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',

        // 🧽 Removed inner scrolling:
        overflow: 'visible',
        maxHeight: 'none',
    }}>
      <HashRouter>
        <ProductsDropdown />
      </HashRouter>

    </div>

  );
}

export default App;
