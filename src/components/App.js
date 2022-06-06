import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authSuccess, getApi } from "../actions/AuthAction";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import materializeCSS from 'materialize-css/dist/css/materialize.min.css'
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = ({props}) => {
  
  return (
    <div>
      <h1>Welcome to React Router !{props.data.name} {props.users && JSON.stringify(props.users)}</h1>
      <Link to="/about">Survey</Link>
    </div>
  );
};
const App = (props) => {
  useEffect(() => {
    props.authSuccess();
   props.getApi();
  }, []);
  return (
    <div className="App">
       <Header />
      <Routes>
       
        <Route path="/" element={<Landing props={props} />} />
        <Route path="about" element={<SurveyNew />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.authReducer.data,
    users: state.authReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authSuccess: () => dispatch(authSuccess()),
    getApi: () => dispatch(getApi())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
