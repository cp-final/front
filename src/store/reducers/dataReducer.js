import {
    TableDataProcessor,
    TableDataSortByNumberHandler,
    TableDataSortBySegmentHandler
} from "../../utils/TableDataProcessor";

const tableDataProcessor = new TableDataProcessor([
    {
        number: 3,
        segment: 1
    },
    {
        number: 1,
        segment: 3
    },
    {
        number: 2,
        segment: 2
    },
]);

const initialState = {
    tableData: tableDataProcessor.getDefault(),
};

const SORT_BY_NUMBER = "DATA/SORT_BY_NUMBER";
const SORT_BY_SEGMENT = "DATA/SORT_BY_SEGMENT";

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SORT_BY_NUMBER:{
            const data = tableDataProcessor.apply(new TableDataSortByNumberHandler());
            return {
                ...state,
                tableData: data
            };
        }
        case SORT_BY_SEGMENT: {
            const data = tableDataProcessor.apply(new TableDataSortBySegmentHandler());
            return {
                ...state,
                tableData: data
            };
        }
        default:
            return state
    }
};

export const sortByNumber = () => ({type: SORT_BY_NUMBER});
export const sortBySegment = () => ({type: SORT_BY_SEGMENT});

export default dataReducer;