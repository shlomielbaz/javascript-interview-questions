// Write a function that checks the validation of math expression
// GOOD: ([abc]){[(2)3+3(2)]}
// BAD: ((()
// BAD: [)]
// BAD: ((((((
// BAD: ))))))

function isValid(str) {
    const len = str.length;
    const stack = [];
    const checker = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    
    for (let idx = 0; idx < len; idx++) {
        let chr = str.charAt(idx);
      
        if ('{[()]}'.indexOf(chr) == -1) {
          continue;
        }
        
        if (chr == '{' || chr == '[' || chr == '(') {
            stack.push(chr)
        }
        else {
            if (stack.at(-1) != undefined && checker[chr] == stack.at(-1)) {
               stack.pop()
            }
            else {
               return false;
            }
        }
    }
    
    if (stack.length > 0) {
        return false
    }
  
    return true;
}

/*

Examples:
-- isValid('((()')                  // false
-- isValid('(((((((')               // false
-- isValid('))))))')                // false
-- isValid('([abc]){[(2)3+3(2)]}')  // true

*/



