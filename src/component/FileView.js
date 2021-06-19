import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getFiles } from "../actions/files";

const FileView = (props) => {
  let { file, getFiles ,openDeleteModal} = props;
  if (!file) {
    return "Empty File";
  }
  console.log("getFiles is", getFiles);
  let { DisplayName, FileName, CreatedAt, Id, IsDir } = file;
  let triggerDeleteFile=()=>{
    openDeleteModal(Id)
  }
  let openFile = () => {
    getFiles(Id);
  };
  let downloadFile = () => {
    let link = document.createElement("a");
    link.href = "http://192.168.1.27:9010/fs/downloadFileById?id=" + Id;
    link.target = "_blank";
    link.download = FileName;
    link.click();
  };
  let createAtDateStr = new Date(CreatedAt).toDateString();
  return (
    <div class="ui card">
      <div class="content">
        <div
          className="header"
          style={{ "word-break": "break-all" }}
          data-tooltip={FileName}
        >
          {IsDir &&<i class="folder icon"></i>}
          {DisplayName}{" "}
        </div>
      </div>
      <div class="content">
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                <i class="calendar alternate outline icon" ></i>
                {createAtDateStr}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content ">
        {IsDir ? (
          <Link to={"/" + Id}>
            {/* <button class="ui button" onClick={openFile}> */}
            <i class="folder icon open big" onClick={openFile}></i>
            {/* </button> */}
          </Link>
        ) : (
          <a href={"http://192.168.1.27:9010/fs/downloadFileById?id=" + Id}>
            <i class="cloud download icon big"></i>
          </a>
        )}

        <div class="right floated author">
          <i class="trash alternate outline icon big" onClick={triggerDeleteFile}></i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getFiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(FileView);
