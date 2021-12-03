import React, {useState} from 'react';
import s from "./Toolbar.module.css";
import Tool from "./Tool/Tool";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import Item from "./Item/Item";

const Toolbar = () => {
    const [pieOpened, setPieOpened] = useState(true);
    const [sliderOpened, setSliderOpened] = useState(true);

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
                    <DropdownMenu opened={sliderOpened} close={() =>{ setSliderOpened(false)}}>
                        <Item callback={() => console.log("slider")}>Something</Item>
                        <Item callback={() => console.log("slider2")}>Something2</Item>
                    </DropdownMenu>

                </Tool>
            </div>
        </div>
    )
};

export default Toolbar;