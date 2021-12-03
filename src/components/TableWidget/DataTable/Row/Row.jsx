import React, {useState} from 'react';
import s from "./Row.module.css";
import {Checkbox} from "../../../common/Checkbox/Checkbox";

const Row = ({data}) => {
    const [checked, setChecked] = useState(false);
  return (
      <div className={s.row}>
          <div>
              <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
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