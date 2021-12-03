import {setOpenedWidget} from "./uploadingWidget";
import {getNewTableData, setUninitializedData} from "./dataReducer";

const initialState = {
    file: null,
    fileUploadStatus: {
        uploading: false,
        uploaded: false,
        uploadedVolume: 0,
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

export const uploadFile = (file) => async (dispatch) => {
    dispatch(setFileUploadStatus({
        ...initialState.fileUploadStatus,
        uploading: true,
        uploadedVolume: 0,
    }));

    const speed = 125000;  // bytes per second

    dispatch(setOpenedWidget(true));
    let i = 0;
    const id = setInterval(() => {
        console.log(file.size);
        let uploadedVolume = (speed / 10 * i) / file.size * 100;
        if (uploadedVolume > 100) {
            dispatch(setFileUploadStatus({
                ...initialState.fileUploadStatus,
                uploadedVolume: 100
            }));
            dispatch(setUninitializedData());
            dispatch(getNewTableData());
            clearInterval(id);
            return;
        }

        dispatch(setFileUploadStatus({
            ...initialState.fileUploadStatus,
            uploading: true,
            uploadedVolume: uploadedVolume
        }));
        i++;
    }, 100);
};

export default filesReducer;