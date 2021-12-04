const initialState = {
    initialized: false,
};

const SET_INITIALIZED = 'APP/SET_INITIALIZED';

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const setInitialized = () => ({type: SET_INITIALIZED});

export const initialize = () => (dispatch) => {
    setTimeout(() => {
        dispatch(setInitialized());
    }, 4000);
};

export default appReducer;