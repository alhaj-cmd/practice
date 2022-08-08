/* 
1. show output from 1 to 50;
2. if the number is divisiable by 3 then instand the number of the 'foo';
3. if the number is divisiable by 5 then instand the number of the 'bar';
3. if the number is divisiable by both 3 and 5 then instand the number of the 'foobar';
 

 */

for(let i= 1; i <= 50; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    else if (i % 3 === 0){
        console.log('foo');
    }
    else if(i % 5 === 0){
        console.log('bar')
    }
    else{
        console.log(i);
    }
}