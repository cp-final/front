import React, {useState} from 'react';
import s from "./Row.module.css";
import {Checkbox} from "../../../common/Checkbox/Checkbox";
import {connect} from "react-redux";
import {select, unselect} from "../../../../store/reducers/dataReducer";

const Row = ({data, select, unselect }) => {
    const [selected, setSelected] = useState(false);

    const handleChange = (e) => {
        setSelected(e.target.checked);
        e.target.checked ? select(data._id) : unselect(data._id);
    };

    return (
        <div className={s.row}>
            <div>
                <Checkbox checked={selected} onChange={handleChange}/>
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

export default connect(null, {
    select,
    unselect
})(Row);