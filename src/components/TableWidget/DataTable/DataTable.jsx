import React from 'react';
import s from "./DataTable.module.css";
import Row from "./Row/Row";
import Title from "./Title/Title";
import WithPreloader from "../../common/WithPreloader";

const DataTable = ({data, isFetching}) => {

    const rows = data.map((rowData, index) => <Row index={index + 1} key={index} data={rowData}/>);

    return (
      <div className={s.wrapper}>
          <Title/>
          {rows}
          {isFetching &&
          <div className={s.preloaderWrapper}>
              <WithPreloader in={!isFetching}/>
          </div>
          }
      </div>
    );
};

export default DataTable;