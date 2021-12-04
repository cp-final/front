import React, {useState} from 'react';
import s from "./Toolbar.module.css";
import Tool from "./Tool/Tool";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import Item from "./Item/Item";
import {connect} from "react-redux";
import {getSelectedOverview} from "../../../../store/reducers/dataReducer";

const Toolbar = ({selected, getSelectedOverview}) => {
    const [pieOpened, setPieOpened] = useState(false);
    const [sliderOpened, setSliderOpened] = useState(false);
    const [wrenchOpened, setWrenchOpened] = useState(false);

    return (
        <div className={s.wrapper}>
            <div className={s.toolsGroup}>
                <Tool className={s.chartPie}
                      activeClassName={s.active}
                      active={pieOpened}
                      setter={setPieOpened}
                >
                    <DropdownMenu opened={pieOpened} close={() =>{ setPieOpened(false)}}>
                        <Item callback={() => getSelectedOverview(selected)}>Визуализировать</Item>
                    </DropdownMenu>
                </Tool>

                <Tool className={s.sliders}
                      activeClassName={s.active}
                      active={sliderOpened}
                      setter={setSliderOpened}
                >
                    <DropdownMenu opened={sliderOpened} close={() =>{ setSliderOpened(false)}}>
                        <Item callback={() => console.log("возр")}>По возрастанию</Item>
                        <Item callback={() => console.log("убыв")}>По убыванию</Item>
                    </DropdownMenu>
                </Tool>

                <Tool className={s.wrench}
                      activeClassName={s.active}
                      active={wrenchOpened}
                      setter={setWrenchOpened}
                >

                </Tool>
            </div>
        </div>
    )
};

const mstp = (state) => ({
    selected: state.data.selected,
});

export default connect(mstp, {
    getSelectedOverview
})(Toolbar);