import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getFiles} from '../actions/files'
import FileView from './FileView'

const FolderView = (props) => {
    let {getFiles,fileItems,match: { params }} = props
    console.log("size = ", fileItems.length);
    console.log("fileItems = ", fileItems);
    let id = params.id
    useEffect(() => {
        if (id){
            getFiles(id)
        }else{
            getFiles(null,true)
        }
    }, [id])
    return (
        <div className="ui three column grid">
            {fileItems && fileItems.length>0 ? 
            fileItems.map((f)=>(
                <div className="column" key={f.Id}>
                    <FileView file={f} key={f.Id}></FileView>
                </div>
            ))
            
            :"No files found"}
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    fileItems: state.files.files
})

const mapDispatchToProps = {
    getFiles
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderView)
