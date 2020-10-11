import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '.././styles/App.css';
import FolderListContextProvider from '../contexts/FolderListContext';
import FolderForm from './FolderForm';
import FolderList from './FolderList';
import Header from './Header';

function App() {
  return (
    <FolderListContextProvider>
      <div className="container mt-4">
        <div>
          <Header />
          <hr />
          <div>
            <FolderForm />
            <FolderList />
          </div>
        </div>
      </div>
    </FolderListContextProvider>
  );
}

export default App;
