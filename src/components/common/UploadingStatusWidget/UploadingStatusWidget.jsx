import React from 'react';
import s from "./UploadingStatusWidget.module.css";
import line from "./../../../assets/Line.svg";
import X from "./../../../assets/X.svg";
import {connect} from "react-redux";
import {setHiddenWidget, setOpenedWidget} from "../../../store/reducers/uploadingWidget";
import cn from 'classnames';
import FileUploadingStatus from "./FileUploadingStatus/FileUploadingStatus";

const UploadingStatusWidget = ({
                                   filename,fileUploadStatus, opened,
                                   hidden, setOpenedWidget, setHiddenWidget
}) => {
    return (
        <div className={cn(s.widget, {[s.hidden]: hidden, [s.closed]: !opened || !fileUploadStatus.uploading})}>
            <div className={s.title}>
                <div className={s.titleText}>Uploading...</div>
                <div className={s.controls}>
                    <div className={s.control}
                         onClick={() => setHiddenWidget(!hidden)}
                    >
                        <img src={line}/>
                    </div>
                    <div className={s.control}
                         onClick={() => setOpenedWidget(false)}
                    >
                        <img src={X}/>
                    </div>
                </div>
            </div>
            <div className={s.queue}>
                <FileUploadingStatus uploaded={fileUploadStatus.uploadedVolume}/>
            </div>
        </div>
    )
};

const UploadingStatusWidgetContainer = (props) => {
    return <UploadingStatusWidget {...props}/>
};

const mstp = (state) => ({
    filename: state.files.file?.name ,
    fileUploadStatus: state.files.fileUploadStatus,
    opened: state.uploadingWidget.opened,
    hidden: state.uploadingWidget.hidden
});

export default connect(mstp, {
    setOpenedWidget,
    setHiddenWidget
})(UploadingStatusWidgetContainer);