import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getFiles } from "../actions/files";
import FileView from "./FileView";
import queryString from 'query-string'

const FolderView = (props) => {
    const value=queryString.parse(props.location.search);
const id=value.id;
console.log('token',id)//123
  let {
    getFiles,
    fileItems,
  } = props;
//   let id = params.id;
  let refreshPage = () => {
    if (id) {
      getFiles(id);
    } else {
      getFiles(null, true);
    }
  };
  let [deleteModalVisible, updateDeleteModalVisibility] = useState(false);
  let [fileIdToDelete, setFileIdToDelete] = useState(0)
  useEffect(() => {
    refreshPage();
  }, [id]);

  let openDeleteModal = (id)=>{
      console.log("show delete modal")
    setFileIdToDelete(id)
    updateDeleteModalVisibility(true)
  }
  let closeDeleteModal = ()=>{
    updateDeleteModalVisibility(false)
  }
  let deleteFile = () => {
    console.log("delete file ",fileIdToDelete )
    updateDeleteModalVisibility(false)
  };

  return (
    <div className="ui three column grid">
      {fileItems && fileItems.length > 0
        ? fileItems.map((f) => (
            <div className="column" key={f.Id}>
              <FileView file={f} key={f.Id} openDeleteModal={openDeleteModal}></FileView>
            </div>
          ))
        : "No files found"}
      {deleteModalVisible && (
        <div class="ui basic modal">
          <div class="ui icon header">
          <i class="trash alternate outline icon"></i>
          </div>
          <div class="content">
            <p>
              Delete file?
            </p>
          </div>
          <div class="actions">
            <div class="ui red basic cancel inverted button">
              <i class="remove icon" onClick={closeDeleteModal}></i>
              No
            </div>
            <div class="ui green ok inverted button">
              <i class="checkmark icon" onClick={deleteFile}></i>
              Yes
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  fileItems: state.files.files,
});

const mapDispatchToProps = {
  getFiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(FolderView);
