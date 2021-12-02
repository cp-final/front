const initialState = {
    tableData: [
        {
            number: 1,
            segment: 1
        },
        {
            number: 2,
            segment: 2
        },
        {
            number: 3,
            segment: 4
        },
    ],
};

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
};

export default dataReducer;