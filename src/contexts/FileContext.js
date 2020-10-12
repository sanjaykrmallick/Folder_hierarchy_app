import React, { createContext, useState } from "react";

export const FileContext = createContext();

const FileContextProvider = (props) => {
  const [selFileId, setSelFileId] = useState(null);

  const [files, setFiles] = useState([
    {
      name: "No. One",                              // Dummy Data
      nodeId: 11,
      children: [
        {
          name: "Child One.1",
          nodeId: 111,
          children: [
            {
              name: "Child One.1.1",
              nodeId: 1111,
              children: [
                {
                  name: "Child One.1.1.1",
                  nodeId: 11111,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "Child One.2",
          nodeId: 112,
          children: [],
        },
      ],
    },
    {
      name: "No. Two",
      nodeId: 12,
      children: [
        {
          name: "No. Two.1",
          nodeId: 121,
          children: [],
        },
      ],
    },
  ]);


  const ramId = () => {                                   //generate random Id
    return Math.floor(1000 + Math.random() * 9000);
  };

  const fileRender = (list, nodeId, obj) => {             // File Render
    const locateFile = list.find((e) => {
      if (e.nodeId === nodeId) {
        return e;
      }
      if (e.children.length > 0) {
        fileRender(e.children, nodeId, obj);
      }

      return undefined;
    });

    if (locateFile) {
        locateFile.children.push(obj);

      setFiles([...files]);
    } else {
      console.log("NodeId Not Found ...");
    }
  };

  const addFile = (name) => {                      // Adding File list
    if (!selFileId) {
      files.push({
        name,
        nodeId: ramId(),
        children: [],
      });
      setFiles([...files]);
    } else {
      fileRender(files, selFileId, { name, nodeId: ramId(), children: [] });
    }
  };

  const selFile = (nodeId) => {                    // Selected file
    setSelFileId(nodeId);
  };

  const deSelFile = () => {                        // De-Selected File
    setSelFileId(null);
  };

  return (
    <FileContext.Provider
      value={{
        files,
        selFileId,
        addFile,
        selFile,
        deSelFile, 
      }}>
      {props.children}
    </FileContext.Provider>
  );
};

export default FileContextProvider;
