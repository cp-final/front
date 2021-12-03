class FakeServer {
    tableData = [
        {
            number: 3,
            segment: 1
        },
        {
            number: 1,
            segment: 3
        },
        {
            number: 2,
            segment: 2
        },
        {
            number: 10,
            segment: 32
        },
        {
            number: 42,
            segment: 12
        },
        {
            number: 43,
            segment: 346
        },
        {
            number: 124,
            segment: 412
        },
        {
            number: 43,
            segment: 23
        },
        {
            number: 123,
            segment: 243
        },
        {
            number: 345,
            segment: 124
        },
        {
            number: 345,
            segment: 214
        },
        {
            number: 543,
            segment: 754
        },
        {
            number: 3,
            segment: 1
        },
        {
            number: 1,
            segment: 3
        },
        {
            number: 2,
            segment: 2
        },
        {
            number: 10,
            segment: 32
        },
        {
            number: 42,
            segment: 12
        },
        {
            number: 43,
            segment: 346
        },
        {
            number: 124,
            segment: 412
        },
        {
            number: 43,
            segment: 23
        },
        {
            number: 123,
            segment: 243
        },
        {
            number: 345,
            segment: 124
        },
        {
            number: 345,
            segment: 214
        },
        {
            number: 543,
            segment: 754
        },
    ];
    PORTION_SIZE = 5;

    getTableData = (portion) => {
        if (portion * this.PORTION_SIZE > this.tableData.length) return [];
        return {
            data: this.tableData.slice(this.PORTION_SIZE * portion, this.PORTION_SIZE * (portion + 1)),
            portionsCount: Math.ceil(this.tableData.length / this.PORTION_SIZE),
        };
    }
}

export const fakeServer = new FakeServer();