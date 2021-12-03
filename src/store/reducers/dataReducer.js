import {API} from "../../config";

const initialState = {
    tableData: [],
    isFetchingTableData: false,
    portion: 0,
    portionsCount: 0,
    initialized: false,
};

const SET_TABLE_DATA = "DATA/GET_TABLE_DATA";
const SET_IS_FETCHING_TABLE_DATA = "DATA/SET_IS_FETCHING_TABLE_DATA";

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_FETCHING_TABLE_DATA:
            return {
                ...state,
                isFetchingTableData: action.isFetching
            };
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
export const setIsFetchingTableData = (isFetching) => ({type: SET_IS_FETCHING_TABLE_DATA, isFetching});


export const getTableData = (portion) => async (dispatch) => {
    dispatch(setIsFetchingTableData(true));
    const data = await API.getTableData(portion);
    dispatch(setTableData(data));
    dispatch(setIsFetchingTableData(false));
};

export default dataReducer;