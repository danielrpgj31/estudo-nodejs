var foo = {'bar': 1};
var foo2 = foo;

foo = {'bar' : 111};
foo2.bar = 22;

console.log(foo2.toString());

function tryToMungeReference(obj) {
    obj = {'bar': 2};  // won't change caller's object
}

function mungeContents(obj) {
    obj.bar = 2;       // changes _contents_ of caller's object
}

tryToMungeReference(foo);
foo.bar === 1;   // true - foo still references original object

mungeContents(foo);
foo.bar === 2;  // true - object referenced by foo has been modified
