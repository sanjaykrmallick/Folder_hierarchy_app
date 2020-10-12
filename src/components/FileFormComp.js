import React, { Fragment, useContext, useState } from "react";
import { FileContext } from "../contexts/FileContext";

const FileFormComp = () => {
  const { addFile } = useContext(FileContext);

  const [fileName, setFileName] = useState("");

  const _handleOnChange = (e) => {
    setFileName(e.target.value);
  };

  const _handleOnSubmit = (e) => {
    e.preventDefault();
    if (fileName.length >= 1) {
      addFile(fileName);
    }
    setFileName("");
  };

  return (
    <Fragment>
      <div className='content_mainDiv '>
        <form
          className='form-group d-flex flex-row justify-content-around mt-5'
          onSubmit={_handleOnSubmit}>
          <input
            type='text'
            className='form-text w-75 shadow-sm bg-white rounded'
            placeholder='Enter folder name ...'
            onChange={_handleOnChange}
            value={fileName}
          />
          <button className='btn btn-primary rounded-pill' onClick={_handleOnSubmit}>
            Add Folder
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default FileFormComp;
