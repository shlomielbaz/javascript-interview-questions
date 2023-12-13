// JavaScript questions about currying. e.g. write a function that can be run like this fooFunc(3)(2)

const fooFunc = (a) => {
    return (b) => {
        return a + b;
    };
}
