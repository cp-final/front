import React, {useState} from 'react';
import s from "./Toolbar.module.css";
import Tool from "./Tool/Tool";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import Item from "./Item/Item";

const Toolbar = () => {
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
                        <Item callback={() => console.log("pie")}>Something</Item>
                    </DropdownMenu>
                </Tool>

                <Tool className={s.sliders}
                      activeClassName={s.active}
                      active={sliderOpened}
                      setter={setSliderOpened}
                >

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

export default Toolbar;