import React, { Fragment, useContext } from "react";
import { FileContext } from "../contexts/FileContext";

const FileListComp = () => {
  const { files, selFileId, selFile, deSelFile } = useContext(FileContext);

  const _handleOnClick = (e) => {
    deSelFile();
  };

  const fileRender = (list) => {
    let structure = list.map((e) => {
      if (e.children.length > 0) {
        return (
          <div key={e.nodeId} style={{ margin: "5px 20px" }}>
            <div
              className={[
                selFileId === e.nodeId ? "active" : "",
                "activeFile",
              ].join(" ")}
              name={e.nodeId}
              onClick={() => selFile(e.nodeId)}>
              <i className='fas fa-folder'></i> {e.name}
            </div>
            <Fragment>{fileRender(e.children)}</Fragment>
          </div>
        );
      } else {
        return (
          <div key={e.nodeId} style={{ margin: "5px 20px" }}>
            <div
              className={[
                selFileId === e.nodeId ? "active" : "",
                "activeFile",
              ].join(" ")}
              name={e.nodeId}
              onClick={() => selFile(e.nodeId)}>
              <i className='fas fa-folder'></i> {e.name}
            </div>
          </div>
        );
      }
    });
    return structure;
  };

  return (
    <div className='d-flex flex-column mt-5 file_ListDisplay'>
      <div id='btn-wrapper' className='d-flex justify-content-end'>
        <button
          className='btn btn-success mr-5 rounded-circle'
          outline
          color='info'
          onClick={_handleOnClick}>
          <i className='fas fa-angle-double-left'></i> Home
        </button>
      </div>
      {fileRender(files)}
    </div>
  );
};

export default FileListComp;
