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

    genCount = () => {
        let count = 0;

        while (count < 100)
            count = (Math.random() * Math.pow(10, Math.random() * 10 % 6 )).toFixed(0);

        this.COUNT = count;
    }
}


// number
// segment [1, 5]
export const fakeServer = new FakeServer();