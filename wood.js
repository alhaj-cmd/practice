// fixed per item wood requerment
// 1. chair 3 cft
// 2. table 10 cft
// 2. bed 50 cft

function woodCalculate(chairQuantity, tableQuantity, bedQuantity){
    const perchairWood =3;
    const pertableWood =10;
    const perbedWood =50;

    const chairwood = chairQuantity*perchairWood;
    const tablewood = tableQuantity*pertableWood;
    const bedwood = bedQuantity*perbedWood;

   // console.log(chairQuantity, tableQuantity, bedQuantity);

   const totalWood = chairwood+tablewood+bedwood;
   return totalWood

}
const totalWood = woodCalculate(2, 2, 7);
console.log(totalWood);