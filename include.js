const names = ['jakia', 'kamal', 'ali', 'kamal', 'forhad', 'sagor', 'sujon', 'situ', 'forhad', 'sagor', 'sujon', 'forhad', 'sagor', 'sujon'];

function removeDuplicate(names){
    const unique = [];
    for(let i=0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name)===false){
            unique.push(name);
        }
    }
    return unique;
}

const UniqueNames = removeDuplicate(names);
console.log(UniqueNames);