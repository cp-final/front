const initialState = {
    opened: false,
    hidden: false,
};

const SET_OPENED = "UPL_WDGT/SET_OPENED";
const SET_HIDDEN = "UPL_WDGT/SET_HIDDEN";

const uploadingWidgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPENED:
            return {
                ...state,
                opened: action.opened
            };
        case SET_HIDDEN:
            return {
                ...state,
                hidden: action.hidden
            };
        default:
            return state
    }
};

export const setOpenedWidget = (opened) => ({type: SET_OPENED, opened});
export const setHiddenWidget = (hidden) => ({type: SET_HIDDEN, hidden});

export default uploadingWidgetReducer;