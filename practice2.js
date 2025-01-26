// Exercise 2: Scope practices

// Global scope
let courseName="JavaScript";

// function scope
function practiceScope(){
    let topic="variables";
    // console.log(courseName+topic); (getting error in function scope)
}
console.log(courseName);

// block scope
if(true){
    let details="Exploring scopes";
    console.log(details);
}
// console.log(details); (error)