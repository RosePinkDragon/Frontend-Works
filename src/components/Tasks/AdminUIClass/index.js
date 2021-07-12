import React from "react";
import propTypes from "prop-types";
import Layout from "components/Tasks/AdminUIClass/Layout";
import LoginScreen from "components/Tasks/AdminUIClass/Login/";
import Chart from "./Home/components/Chart";
import ProductCards from "./Home/components/ProductCards";
import { connect } from "react-redux";
import "styles/App.css";

// ?? data is used to store external data to reuse.
const mapStateToProps = (props) => {
  return {
    status: props.loginReducers.logged,
  };
};

class AdminUIClass extends React.Component {
  render() {
    return (
      <>
        {this.props.status ? (
          <Layout>
            <ProductCards />
            <Chart />
          </Layout>
        ) : (
          <LoginScreen />
        )}
      </>
    );
  }
}

// ?? we can also check for prop types as well
AdminUIClass.propTypes = {
  // logged: propTypes.bool,
  defProps: propTypes.object,
};

// ?? we can pass default props if the props as not passed
AdminUIClass.defaultProps = {
  defProps: {
    This: "is a def prop",
  },
};

export default connect(mapStateToProps)(AdminUIClass);
