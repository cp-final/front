import s from './App.module.css';
import {connect} from "react-redux";
import React from "react";
import TableWidget from "../TableWidget/DataTableWidget";

const App = (props) => {
  return (
      <div>
          <TableWidget />
      </div>
  );
};

const mstp = (state) => ({
  number: state.app.number,
});

export default connect(mstp, {
})(App);
