/*
Create a module that takes an array of JSON objects, each representing a sales transaction,
and aggregates the total revenue and units sold.

Your goal is to implement a function aggregateSalesCh that 
takes an array of these transaction objects and returns a JSON object containing
the total revenue and total units sold across all transactions.

*/

function aggregateSales(transactions) {
    result = {
        totalRevenue: 0,
        totalUnits: 0,
    }

    transactions.forEach((transaction) => {
        result["totalRevenue"] += transaction["quantity"] * transaction["price"]
        result["totalUnits"] += transaction["quantity"]
    })

    result["totalRevenue"] = parseFloat(result["totalRevenue"].toFixed(2))

    console.log(result)
}

// Input
const transactions = [
    {
        product: "Widget A",
        price: 9.99,
        quantity: 10,
    },
    {
        product: "Widget B",
        price: 14.99,
        quantity: 7,
    },
    {
        product: "Widget A",
        price: 9.99,
        quantity: 5,
    },
]

aggregateSales(transactions)

// Output should be:
// {
//     "totalRevenue": 254.78,
//     "totalUnitsSold": 22
// }
