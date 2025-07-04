import React from 'react';
import WasherDropdown from './components/washerDropDown';
import DryingDropDown from './components/dryingDropDown';
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <WasherDropdown />
      <DryingDropDown />
    </div>

  );
}

export default App;
