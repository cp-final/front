import React from 'react';
import s from "./Row.module.css";

const Row = ({data, index}) => {
  return (
      <div className={s.row}>
          <div className={s.rowItem}>
              {index}
          </div>
          <div className={s.rowItem}>
              {data.number}
          </div>
          <div className={s.rowItem}>
              {data.segment}
          </div>
      </div>
  )
};

export default Row;