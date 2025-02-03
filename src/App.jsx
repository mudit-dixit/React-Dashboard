// src/App.js
import React from 'react';
import { Provider } from 'mobx-react';
import Dashboard from './components/Dashboard';
import { StoreContext } from "./models";
import rootStore from "./stores/MobXRootStore";

function App() {
  return (
   
    <StoreContext.Provider value={rootStore}>
      <div className="min-h-screen bg-gray-100 w-full content-center items-center  place-items-center place-content-center flex">
        test
        <Dashboard /> 
      </div>
    </StoreContext.Provider>
  );
}

export default App;