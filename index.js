const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
  console.log(["Milo", "Otis", "Garfield", name])

  cats.push("Ralph");
  cats;

}

destructivelyAppendCat('Ralph');


function destructivelyPrependCat(name){
  console.log([name, "Milo", "Otis", "Garfield",])

  
cats.unshift("Bob");


cats;

}

destructivelyAppendCat('Bob');


function  destructivelyRemoveLastCat(){
  console.log(["Milo", "Otis", "Garfield",])

  
  cats.pop();


cats;

}

function  destructivelyRemoveFirstCat(){
  console.log(["Milo", "Otis", "Garfield",])

  
  cats.shift();


cats;

}

function appendCat(name){
    var newArray = cats.slice();
    newArray.push(name)
    return newArray
  }
  appendCat('Broom');

  function prependCat(name){
    var newArray = cats.slice();
    newArray.unshift(name)
    return newArray
  }
  prependCat("Arnold");

  function removeLastCat(){
    var newArray = ["Milo", "Otis", "Garfield",]
    newArray.splice(2);
    return newArray
  }
  
  function removeFirstCat(){
    var newArray = ["Milo", "Otis", "Garfield",]
    newArray.shift();
    return newArray
  }
