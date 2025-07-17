import React from 'react';
import { HashRouter } from 'react-router-dom';
import ProductsDropdown from './components/machinesDropDown';
function App() {
  return (
    <div style={{ padding: '60px'}}>
      <HashRouter>
        <ProductsDropdown />
      </HashRouter>

    </div>

  );
}

export default App;
