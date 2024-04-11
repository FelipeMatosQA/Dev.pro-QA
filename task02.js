/**
 * Sorts an array of products based on a given sort key and order.
 *
 * @param {Array} products - The array of products to sort.
 * @param {String} sort_key - The key to sort the products by (e.g., 'name', 'price', 'stock').
 * @param {Boolean} ascending - If true, sort in ascending order; if false, sort in descending order.
 * @returns {Array} The sorted array of products.
 */
function sortProducts(products, sort_key, ascending = true) {
    return products.sort((a, b) => {
        if (a[sort_key] < b[sort_key]) {
            return ascending ? -1 : 1;
        }
        if (a[sort_key] > b[sort_key]) {
            return ascending ? 1 : -1;
        }
        return 0;
    });
}


const products = [
    {"name": "Product A", "price": 100, "stock": 5},
    {"name": "Product B", "price": 200, "stock": 3},
    {"name": "Product C", "price": 55, "stock": 10}
];

const sortedProducts = sortProducts(products, "price", false);

console.log(sortedProducts);