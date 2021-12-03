import {API} from "../../config";

const initialState = {
    tableData: [],
    isFetchingTableData: false,
    portion: 0,
    portionsCount: 0,
    initialized: false,
};

const SET_TABLE_DATA = "DATA/GET_TABLE_DATA";

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TABLE_DATA:
            return {
                ...state,
                tableData: [...state.tableData, ...action.data.data],
                portion: state.portion + 1,
                portionsCount: action.data.portionsCount,
                initialized: true,
            };
        default:
            return state
    }
};

export const setTableData = (data) => ({type: SET_TABLE_DATA, data});

export const getTableData = (portion) => async (dispatch) => {
    const data = await API.getTableData(portion);
    dispatch(setTableData(data));
};

export default dataReducer;