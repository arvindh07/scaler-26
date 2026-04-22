const transactions = [
    { customerId: 1, amount: 100, date: "2024-03-01" },
    { customerId: 2, amount: 150, date: "2024-03-01" },
    { customerId: 1, amount: 200, date: "2024-03-02" },
    { customerId: 3, amount: 50, date: "2024-03-02" },
    { customerId: 2, amount: 120, date: "2024-03-03" },
]

let summary = {
    totalNumberOfTransactions: 0,
    total: 0,
    average: 0,
    groupedPerDay: {},
    groupedPerCustomer: {}
};

transactions.reduce((acc, curr, idx) => {
    acc["totalNumberOfTransactions"] += 1;
    acc["total"] += curr.amount;

    if (!acc.groupedPerDay?.[curr.date]) {
        acc.groupedPerDay[curr.date] = [curr];
    } else {
        acc.groupedPerDay[curr.date].push(curr);
    }
    if (!acc.groupedPerCustomer?.[curr.customerId]) {
        acc.groupedPerCustomer[curr.customerId] = [curr];;
    } else {
        acc.groupedPerCustomer[curr.customerId].push(curr);
    }

    if (idx === transactions.length - 1) {
        acc.average = acc.total / transactions.length;
    }

    return acc;
}, summary);

console.log(summary, summary.groupedPerDay, summary.groupedPerCustomer);
