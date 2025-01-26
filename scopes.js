// Task 2: understanding scopes

// Task 2.1: Global scope
let globalvariable="I am global";
console.log(globalvariable);

// Task 2.2: Function scope
function testfunction(){
    let functionvariable="I am in function";
    // console.log(functionvariable); (error)
    // console.log(globalvariable); (error not showing in console)
}

// Task 2.3: Block scope
if (true) {
    let blockVariable="I am in block";
    const alsoInBlock="Me too";
    var notActuallyBlocked="I can escape!";
    console.log(blockVariable) ;
    console.log(alsoInBlock);
    console.log(notActuallyBlocked);
}

  // console.log(blockVariable) ; (let error)
    // console.log(alsoInBlock); (const error)
// console.log(notActuallyBlocked); (var working outside also)
