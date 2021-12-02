import React from 'react';
import s from "./DataTable.module.css";
import Row from "./Row/Row";
import Title from "./Title/Title";

const DataTable = ({data}) => {

    const rows = data.map(rowData => <Row data={rowData}/>);

    return (
      <div className={s.wrapper}>
          <Title/>
          {rows}
      </div>
    );
};

export default DataTable;