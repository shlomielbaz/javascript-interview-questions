/*

Q: what is GIT REVERT do and how is act?
A: bring commit-id to the HEAD, 
e.g.:
A->B->C 
git revert B
A->B->C->D


Q: whats the different between useEffect and useMemo
A: although they looks similar, each serve different porpose
-- useEffect - is used to perform side effects, Side effects can include things like fetching data, updating the DOM, or subscribing to a service
-- useMemo - is used to memoize the result of a computation, so that it is only recalculated when its dependencies change. It helps to avoid unnecessary recalculations and optimize performance.
-- useCallback - is used to memoize functions. It returns a memoized version of the callback function that only changes if one of its dependencies changes.

*/

function func(a) {
    a = "4"
}

let a = "Shlomi";

let b = a;

a = "Elbaz"

console.log(a)
console.log(b)