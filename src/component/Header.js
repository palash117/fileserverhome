import React from "react";
import { connect } from "react-redux";

export const Header = (props) => {
  return (
    <div className="ui inverted menu" >
      <div className="header item"> <i className="cloud upload icon"></i>FILE SERVER</div>
      
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
