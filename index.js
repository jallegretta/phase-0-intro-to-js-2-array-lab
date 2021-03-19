
let cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return [...cats, "Broom"];
}

function prependCat(name){
    return ["Arnold", ...cats]; 
}

function removeLastCat(){
    let cats2 = cats.slice(0,2);
    return cats2;
}

function removeFirstCat(){
    let cats3 = cats.slice(1)
    return cats3;
}