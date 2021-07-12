import React from "react";
import userLogo from "images/userLogo.png";
import "styles/Layout.css";
import { sidebarData } from "utils/layoutData";
import SidebarSubMenu from "./SidebarSubMenu";
import { connect } from "react-redux";
import { logOut } from "../redux/actions/loginActions";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleLogOut = () => {
    this.props.logOut();
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <h1>App Name</h1>
            <div>
              <img className="logo" src={userLogo} alt="" />
              <p>Moheb Dabilkar</p>
            </div>
            <div
              className={`burger-btn ${this.state.isActive ? "active" : ""}`}
              onClick={() => this.setState({ isActive: !this.state.isActive })}
            />
          </nav>
        </header>
        <div className={`sidebar ${this.state.isActive ? "active" : ""}`}>
          <div className="sidebarUserInfo">
            <img className="logo" src={userLogo} alt="" />
            <p>Moheb Dabilkar</p>
          </div>
          <div className="components">
            {sidebarData.map((data, idx) => (
              <SidebarSubMenu key={idx} data={data} />
            ))}
          </div>
          <div>
            <button className="btn logOut" onClick={() => this.handleLogOut()}>
              LogOut
            </button>
          </div>
        </div>
        <div className="bodyWrap">{this.props.children}</div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { logged: state.logged };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch(logOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
