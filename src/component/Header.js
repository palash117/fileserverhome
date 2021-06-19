import React from "react";
import { connect } from "react-redux";
import { checkHealth } from "../actions/healthCheck";

const Header = (props) => {
  let { healthy } = props;
  console.log("healthy is ", healthy);
  return (
    <div className="ui inverted menu">
      <div className="header item">
        <i className="cloud upload icon"></i>FILE SERVER
      </div>
      <div class="right menu">
        <div class="item">
          {healthy ? (
            <i class="green wifi icon big"></i>
          ) : (
            <i class="red exclamation circle icon big"></i>
          )}
          {/* <div class="ui transparent inverted icon input">
            <i class="search icon"></i>
            <input type="text" placeholder="Search" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    healthy: state.healthCheck.healthy,
  };
};

const mapDispatchToProps = {
  checkHealth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
