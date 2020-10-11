import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const FolderListContext = createContext();

const FolderListContextProvider = (props) => {

    const [selectedFolderId, setSelectedFolderId] = useState(null)

    const [folders, setFolders] = useState([
        {
            name: 'No. One',
            id: 101,
            children: [
                {
                    name: 'Child One.1',
                    id: 1011,
                    children: [
                        {
                            name: 'Child One.1.1',
                            id: 10111,
                            children: [
                                {
                                    name: 'Child One.1.1.1',
                                    id: 101111,
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Child One.2',
                    id: 1012,
                    children: []
                } 
            ]
        },
        {
            name: 'No. Two',
            id: 102,
            children: [
                {
                    name: 'No. Two.1',
                    id: 1021,
                    children: []
                }
            ]
        }
    ])

    const folderListTraverse = (folderList, id, obj) => {

        folderList.forEach( e => {
            if(e.id === id) {
                e.children.push(obj);
                return folderList;
            }

            if(e.children.length > 0) {
                folderListTraverse(e.children, id, obj)
            }
        })
        return folderList;
    }

    const addFolder = (name) => {
        if(!selectedFolderId) {
            folders.push({
                name,
                id: uuidv4(),
                children: []
            })
        } else {
            folderListTraverse(folders, selectedFolderId, {name,id:uuidv4(),children:[]})
        }
        setFolders([...folders])
    }

    const selectFolder = id => {
        setSelectedFolderId(id)
    }

    const unSelectFolder = () => {
        setSelectedFolderId(null)
    }

    return (
        <FolderListContext.Provider
        value={{
            folders, selectedFolderId, selectFolder, unSelectFolder, addFolder
        }}
        >
            {props.children}
        </FolderListContext.Provider>
    )
}

export default FolderListContextProvider;
