class FakeServer {
    tableData = [4,
        4,
        5,
        5,
        4,
        5,
        4,
        5,
        3,
        5,
        3,
        5,
        3,
        5,
        5,
        5,
        2,
        5,
        4,
        3,
        2,
        3,
        2,
        5,
        5,
        4,
        4,
        4,
        3,
        4,
        5,
        3,
        3,
        5,
        3,
        3,
        4,
        3,
        3,
        3,
        3,
        3,
        4,
        5,
        3,
        5,
        3,
        3,
        3,
        4,
        5,
        3,
        4,
        3,
        5,
        2,
        5,
        5,
        5,
        3,
        4,
        4,
        3,
        5,
        3,
        5,
        5,
        3,
        5,
        5,
        3,
        5,
        4,
        4,
        5,
        2,
        5,
        5,
        5,
        3,
        5,
        5,
        3,
        5,
        5,
        5,
        3,
        5,
        4,
        3,
        3,
        3,
        4,
        3,
        4,
        5,
        5,
        2,
        5,
        4,
        5,
        4,
        4,
        3,
        5,
        5,
        2,
    ];
    COUNT = this.tableData.length;
    PORTION_SIZE = 15;

    getTableData = (portion) => {
        if (portion * this.PORTION_SIZE > this.COUNT) return [];
        const d = this.tableData.slice(portion * this.PORTION_SIZE, this.PORTION_SIZE * (portion + 1));
        let data = this.map(d, portion * this.PORTION_SIZE + 1);

        return {
            data,
            portionsCount: Math.ceil(this.COUNT / this.PORTION_SIZE),
        };
    };

    getNewTableData = () => {
        this.genCount();
        this.tableData = [];

        for (let i = 0; i < this.COUNT; i++)
            this.tableData[i] = this.genItem();

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

        this.map(this.tableData).forEach(item => {
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

    genItem = () => +((Math.random() * 10 % 4 + 1).toFixed(0));

    genId = () => (Math.random() * Math.pow(10, 10)).toFixed(0);

    map = (data, startIndex = 1) => data.map((segment, number) => ({segment, number: number + startIndex, _id: this.genId()}));
}

export const fakeServer = new FakeServer();