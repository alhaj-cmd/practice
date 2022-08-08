const simpleCart = [
    {name:'shoes', price:1200},
    {name:'shart', price:2000},
    {name:'perfime', price:10200},
    {name:'book', price:1400}
]

function totalproduct (products){
        let sum = 0; 
    for (let i= 0; i <products.length; i++){
        const product = products[i];
        //console.log(product);
        sum = sum + product.price;
    }
}
const expense =totalproduct(simpleCart);
console.log(expense);