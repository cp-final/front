class FakeServer {
    COUNT = 0;
    tableData = [];
    PORTION_SIZE = 15;

    constructor() {

    }

    getTableData = (portion) => {
        if (portion * this.PORTION_SIZE > this.COUNT) return [];

        let data = this.tableData.slice(portion * this.PORTION_SIZE, this.PORTION_SIZE * (portion + 1));

        return {
            data,
            portionsCount: Math.ceil(this.COUNT / this.PORTION_SIZE),
        };
    };

    getNewTableData = () => {
        this.genCount();

        for (let i = 0; i < this.COUNT; i++)
            this.tableData[i] = this.genItem(i);

        return this.getTableData(0);
    };

    getOverview = () => {
        let result = [
            {id: '1', label: "1", value: 0},
            {id: '2', label: "2", value: 0},
            {id: '3', label: "3", value: 0},
            {id: '4', label: "4", value: 0},
            {id: '5', label: "5", value: 0}
        ];

        this.tableData.forEach(item => {
            result.find(resultItem => +resultItem.id === item.segment).value += 1;
        });

        return result;
    };

    genCount = () => {
        let count = 0;

        while (count < 100)
            count = (Math.random() * Math.pow(10, Math.random() * 10 % 6)).toFixed(0);

        this.COUNT = count;
    };

    genItem = (i) => ({
        number: i,
        segment: +((Math.random() * 10 % 4 + 1).toFixed(0)),
        _id: (Math.random() * Math.pow(10, 10)).toFixed(0),
    });
}

export const fakeServer = new FakeServer();