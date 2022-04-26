
// callbackFunction
function receivesAFunction(spy){
    return spy();
}

console.log ( receivesAFunction(function (){ return "Hi Sara"}) )

// NamedFunction
function returnsANamedFunction(){
    return function namedFn (){
        // console.log("Hi")
        return 'Hi I am  Named Function'
    }
}
let fn = returnsANamedFunction()
fn ();
console.log( returnsANamedFunction() )
console.log(fn())

// AnonymousFunction
function returnsAnAnonymousFunction(){
return function (){
    return "Hi I am Anonymous Function"
}

}
let AnFn = returnsAnAnonymousFunction()

console.log ( (returnsAnAnonymousFunction() ) )
console.log ( AnFn() )