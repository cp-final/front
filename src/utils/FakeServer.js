class FakeServer {
    COUNT = 0;
    PORTION_SIZE = 15;

    constructor() {

    }

    getTableData = (portion) => {
        if (portion * this.PORTION_SIZE > this.COUNT) return [];

        let data = [];

        for (let i = 0; i < this.PORTION_SIZE; i++)
            data[i] = {
                number: portion * this.PORTION_SIZE + i + 1,
                segment: (Math.random() * 10 % 5 + 1).toFixed(0)
            };

        return {
            data,
            portionsCount: Math.ceil(this.COUNT / this.PORTION_SIZE),
        };
    };

    getNewTableData = () => {
        this.genCount();

        return this.getTableData(0);
    };

    getOverview = () => {
        return [
            {
                "id": "1",
                "label": "1",
                "value": 414,
                "color": "hsl(2, 70%, 50%)"
            },
            {
                "id": "2",
                "label": "2",
                "value": 538,
                "color": "hsl(12, 70%, 50%)"
            },
            {
                "id": "3",
                "label": "3",
                "value": 113,
                "color": "hsl(90, 70%, 50%)"
            },
            {
                "id": "4",
                "label": "4",
                "value": 358,
                "color": "hsl(266, 70%, 50%)"
            },
            {
                "id": "5",
                "label": "5",
                "value": 568,
                "color": "hsl(202, 70%, 50%)"
            }
        ]
    };

    genCount = () => {
        let count = 0;

        while (count < 100)
            count = (Math.random() * Math.pow(10, Math.random() * 10 % 6 )).toFixed(0);

        this.COUNT = count;
    }
}

export const fakeServer = new FakeServer();