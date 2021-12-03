import {API} from "../../config";

const initialState = {
    tableData: [],
    isFetchingTableData: false,
    portion: 0,
    portionsCount: 0,
    initialized: false,
};

const ADD_TABLE_DATA = "DATA/ADD_TABLE_DATA";
const SET_IS_FETCHING_TABLE_DATA = "DATA/SET_IS_FETCHING_TABLE_DATA";
const SET_NEW_TABLE_DATA = "DATA/SET_NEW_TABLE_DATA";
const SET_UNINITIALIZED_DATA = "DATA/SET_UNINITIALIZED_DATA";
const CLEAR_DATA = "DATA/CLEAR_DATA";

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_FETCHING_TABLE_DATA:
            return {
                ...state,
                isFetchingTableData: action.isFetching
            };
        case ADD_TABLE_DATA:
            return {
                ...state,
                tableData: [...state.tableData, ...action.data.data],
                portion: state.portion + 1,
                portionsCount: action.data.portionsCount,
            };
        case SET_NEW_TABLE_DATA:
            return {
                ...initialState,
                tableData: [...action.data.data],
                portion: 1,
                portionsCount: action.data.portionsCount,
                initialized: true
            };
        case SET_UNINITIALIZED_DATA:
            return {
                ...state,
                initialized: false,
            };
        case CLEAR_DATA:
            return {
                ...initialState
            };
        default:
            return state
    }
};

export const addTableData = (data) => ({type: ADD_TABLE_DATA, data});
export const setIsFetchingTableData = (isFetching) => ({type: SET_IS_FETCHING_TABLE_DATA, isFetching});
export const setNewTableData = (data) => ({type: SET_NEW_TABLE_DATA, data});
export const setUninitializedData = () => ({type: SET_UNINITIALIZED_DATA});
export const clearData = () => ({type: CLEAR_DATA});

export const getTableData = (portion) => async (dispatch) => {
    dispatch(setIsFetchingTableData(true));
    const data = await API.getTableData(portion);
    dispatch(addTableData(data));
    dispatch(setIsFetchingTableData(false));
};

export const getNewTableData = () => async (dispatch) => {
    dispatch(clearData());
    dispatch(setIsFetchingTableData(true));
    const data = await API.getNewTableData();
    dispatch(setNewTableData(data));
    dispatch(setIsFetchingTableData(false));
};

export default dataReducer;