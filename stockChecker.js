let products = [{
    name: "apple",
    price: 990,
    stockAmount: 9,
}, {
    name: "samsung",
    price: 990,
    stockAmount: 7,
}, {
    name: "nokia",
    price: 990,
    stockAmount: 9,
}, {
    name: "asus",
    price: 990,
    stockAmount: 0
}];
    
function stockChecker(product){
    let outOfStock = [];
    for (let i = 0; i < product.length; i++) {
        if (product[i].stockAmount == 0) {
           outOfStock.push(product[i].name);
        }
    }
    return outOfStock;

}
console.log(stockChecker(products));

// Return the total sum of all the items in stock. 

function SumOfItem(product){
    let sum = 0;
    for (let i = 0; i < product.length; i++) { 
        sum += product[i].stockAmount;
    }
    return sum;
}
console.log(SumOfItem(products));

/* Use the array of products from the previous exercise. 
Write a function that returns the products that are available in stock. 
*/

function stockAvailable(product) {
    let available = [];
    for (let i = 0; i < product.length; i++) {
        if (product[i].stockAmount > 0) {
           available.push(product[i].name);
        }
    }
    return available;
}

console.log(stockAvailable(products));
/* Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then should return true/false if that product name exists
	in the products array. 
*/

function checkName(product, productName) {
    for (let i = 0; i < product.length; i++) {

        if (product[i].name == productName) {
            return true;
        } 
    }
    return false;
   

}

console.log(checkName(products, "asus"));

/* Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then return a product array that doesn't include 
	the product with the given name. 
	(The function deletes the given product name if it exists)
*/

function deleteProduct(product, productName) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].name == productName) {
            delete product[i];
            
        }
    }
    return console.log(product);
   
}
deleteProduct(products, "apple");