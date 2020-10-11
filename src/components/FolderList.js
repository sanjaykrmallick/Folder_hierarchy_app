import React, { useContext } from 'react'
import { FolderListContext } from '../contexts/FolderListContext'
import { Button } from 'reactstrap';

const FolderList = () => {

    const { 
        // list
        folders, selectedFolderId, 
        // functions
        selectFolder, unSelectFolder 
    } = useContext(FolderListContext)

    const _handleOutsideOnBlurClick = (e) => {
        unSelectFolder();
    }

    const folderListGenrate = (folderList) => {

        let structure = folderList.map( e => {

            if(e.children.length > 0) {
                return <ul key={e.id}>
                    <li>
                        <div className={
                            [selectedFolderId===e.id ? 'active' : '', 'oneFolder'].join(' ')
                        }
                        // tabIndex="0"
                        // onBlur={_handleOutsideOnBlurClick}
                        onClick={() => selectFolder(e.id)}>
                            <i className="far fa-folder"></i> {e.name}
                        </div>
                        <>{folderListGenrate(e.children)}</>
                    </li>
                </ul>
            } 
            else {
                return <ul key={e.id}>
                    <li>
                        <div className={
                            [selectedFolderId===e.id ? 'active' : '', 'oneFolder'].join(' ')
                        }
                        // tabIndex="0"
                        // onBlur={_handleOutsideOnBlurClick}
                        onClick={() => selectFolder(e.id)}>
                            <i className="far fa-folder"></i> {e.name}
                        </div>
                    </li>
                </ul>
            }

        })
        return structure;
    }

    return (
        <div className="border main__folder__list">

            <Button 
            className="back__to__homeBtn" 
            outline color="info" 
            onClick={_handleOutsideOnBlurClick}>
                <i className="fas fa-angle-double-left"></i> Back To Home
            </Button>

            {
                folderListGenrate(folders)
            }

        </div>
    )
}

export default FolderList
