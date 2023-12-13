// Write a function isBalanced(str) that returns true if the string contains balanced curly-braces. otherwise, false.

function isBalanced (str) {
    if(str === null || str === '') {
        return false;
    }

    const stack = [];
    const len = str.length;
    let idx = 0;

    while(idx <= len) {
        let current = str.charAt(idx);

        if (current === '{') {
            stack.push(current);
        }
        else if(current === '}') {
            const pivot = stack.pop();

            if(pivot !== '{') {
                return false;
            }
        }

        idx = idx + 1;
    }

    return stack.length === 0;
}

// isBalanced("{sdfsdfsdfsdf{sdfsdfsdfsdfsdf{sdfsdfsdf}sdfsdfdsf}sdfsfdsdf}{}{}{}{}{dfgdsfg}{{{{{{{{}}}}}}}}")
