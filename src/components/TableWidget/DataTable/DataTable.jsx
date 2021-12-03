import React from 'react';
import s from "./DataTable.module.css";
import Row from "./Row/Row";
import Title from "./Title/Title";

const DataTable = ({data, loadData}) => {

    const rows = data.map((rowData, index) => <Row key={index} data={rowData}/>);



    return (
      <div className={s.wrapper}>
          <div onClick={loadData}>btn</div>
          <Title/>
          {rows}
      </div>
    );
};

export default DataTable;