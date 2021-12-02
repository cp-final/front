import * as _ from "lodash";
// data [{number, segment}]

export class TableDataProcessor {
    data;
    constructor(data) {
        this.data = data;
    }

    apply = (handler) => {
        return handler.handle(_.cloneDeep(this.data));
    };

    getDefault = () => {
        return _.cloneDeep(this.data);
    }
}

export class TableDataSortByNumberHandler {
    handle = (data) => {
        return data.sort((a, b) => a.number - b.number);
    }
}

export class TableDataSortBySegmentHandler {
    handle = (data) => {
        return data.sort((a, b) => a.segment - b.segment);
    }
}