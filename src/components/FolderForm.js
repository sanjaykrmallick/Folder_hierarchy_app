import React, { useContext, useState } from 'react'
import { FolderListContext } from '../contexts/FolderListContext'
import { Button, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const FolderForm = () => {

    const { addFolder } = useContext(FolderListContext)

    const [folderName,setFolderName] = useState('');
    // const [error,setError] = useState(null);

    const _handleAddFolder = e => {
        e.preventDefault();

        if(folderName.trim().length > 0) {
            addFolder(folderName.trim())
        }
        
        setFolderName('')

    }

    // const validateFolderName = () => {
    //     let isError = false;
    //     if(folderName.trim().length === 0) {
    //         setError('*Required')
    //         isError = true;
    //     } else {
    //         setError(null)
    //     }
    //     return isError;
    // }

    const folderNameOnChange = async(e) => {
        setFolderName(e.target.value)
    }

    return (
        <div className="main__folder__form">
            <Form onSubmit={_handleAddFolder}>
                <InputGroup className='addFolderController'>
                    <Input className='addFolderInput'
                    required
                    value={folderName} onChange={folderNameOnChange}
                    type="text" placeholder="Add Folder..." />
                    <InputGroupAddon addonType="append">
                        <Button 
                        type="submit"
                        className='addFolderButton' color="primary">
                            Add Folder
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
            {/* {
                error ? (
                    <div className="validationError">{error}</div>
                ) 
                :
                null
            } */}
        </div>
    )
}

export default FolderForm;
