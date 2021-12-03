const initialState = {
    file: null,
    fileUploadStatus: {
        uploading: false,
        uploaded: false,
        error: false,
    },
};

const SET_FILE = "FILES/SET_FILE";
const SET_FILE_UPLOAD_STATUS = "FILES/SET_FILE_UPLOAD_STATUS";


const filesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FILE:
            return {
                ...state,
                file: action.file,
                fileUploadStatus: {
                    ...initialState.fileUploadStatus
                }
            };
        case SET_FILE_UPLOAD_STATUS:
            return {
                ...state,
                fileUploadStatus: action.fileUploadStatus
            };
        default:
            return state;
    }
};

export const setFile = (file) => ({type: SET_FILE, file});
export const setFileUploadStatus = (fileUploadStatus) => ({type: SET_FILE_UPLOAD_STATUS, fileUploadStatus});

export const uploadFile = () => (dispatch) => {
    dispatch(setFileUploadStatus({
        ...initialState.fileUploadStatus,
        uploading: true
    }));
    setTimeout(() => {
        dispatch(setFileUploadStatus({
            ...initialState.fileUploadStatus,
            uploading: false,
            error: true
        }));
    }, 1000);
};

export default filesReducer;