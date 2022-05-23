/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {      
//     set the maximum sell price to 0, maximum sell price to the first price in the array
    let greatestProfit = 0, minimum = prices[0];

//     for each price in the array of prices
    prices.forEach((price) => {
//         if the current price we are looking at is less than the minimum sell price, we will set this to the new minimum. This is effectively saying we've found a new potential buy date, because we've found the new lowest value
        if (price < minimum) {
            minimum = price;
//             else (to preclude looking at the new minimum we may have set), we will look to see if the current price minus the potential buy price is greater than our greatest profit. if it is, we will set this to the new greatest profit
        } else if (price - minimum > greatestProfit) {
            greatestProfit = price - minimum;
        }
    })
    return greatestProfit;
};