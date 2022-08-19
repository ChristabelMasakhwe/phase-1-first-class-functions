function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function name() {
    }
}
function returnsAnAnonymousFunction(name) {
    return function() {
        `My ${name} is Isabel`
    }
}