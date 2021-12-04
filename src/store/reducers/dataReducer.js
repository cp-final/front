import {API} from "../../config";

const initialState = {
    tableData: [],
    selected: [],
    isFetchingTableData: false,
    portion: 0,
    portionsCount: 0,
    initialized: false,
    chartData: null,
};

const ADD_TABLE_DATA = "DATA/ADD_TABLE_DATA";
const SET_IS_FETCHING_TABLE_DATA = "DATA/SET_IS_FETCHING_TABLE_DATA";
const SET_NEW_TABLE_DATA = "DATA/SET_NEW_TABLE_DATA";
const SET_UNINITIALIZED_DATA = "DATA/SET_UNINITIALIZED_DATA";
const CLEAR_DATA = "DATA/CLEAR_DATA";
const SET_CHART_DATA = "DATA/SET_CHART_DATA";
const SELECT = "DATA/SELECT";
const UNSELECT = "DATA/UNSELECT";

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
        case SET_CHART_DATA:
            return {
                ...state,
                chartData: action.data
            };
        case SELECT:
            return {
                ...state,
                selected: [...state.selected, state.tableData.find(item => item._id === action._id)],
            };
        case UNSELECT:
            return {
                ...state,
                selected: state.selected.filter(item => item._id !== action._id),
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
export const setChartData = (data) => ({type: SET_CHART_DATA, data});
export const select = (_id) => ({type: SELECT, _id});
export const unselect = (_id) => ({type: UNSELECT, _id});

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
    const overview = await API.getOverview();
    dispatch(setNewTableData(data));
    dispatch(setChartData(overview));
    dispatch(setIsFetchingTableData(false));
};

export const getSelectedOverview = (selected) => async (dispatch) => {
    const data = await API.getSelectedOverview(selected);
    dispatch(setChartData(data));
};

export default dataReducer;