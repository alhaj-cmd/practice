const phones =[
    {name:'symphone', camera: 12, stotage:'24gp', price:233990, color:'silver'},
    {name:'redmi9', camera: 24, stotage:'1gp', price:343990, color:'silver'},
    {name:'realme', camera: 48, stotage:'4gp', price:23990, color:'silver'},
    {name:'nokia', camera: 13, stotage:'8gp', price:73990, color:'silver'},
    {name:'tecno', camera: 8, stotage:'28gp', price:83990, color:'silver'}
];

function cheapestPhone (names){
    let cheapest = names[0];
    for(let i=0; i <phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const myselection = cheapestPhone(phones);
console.log(myselection);