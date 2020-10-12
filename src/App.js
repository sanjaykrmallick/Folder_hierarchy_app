import React from "react";

import FileContextProvider from "./contexts/FileContext";
import FileFormComp from "./components/FileFormComp";
import FileListComp from "./components/FileListComp";
import Header from "./components/HeaderComp";

function App() {
  return (
    <FileContextProvider>
      <div>
        <Header />
      </div>
      <div className='container mt-4 p-2 shadow-lg p-3 mb-5 bg-white rounded'>
        <FileFormComp />
        <FileListComp />
      </div>
    </FileContextProvider>
  );
}

export default App;
