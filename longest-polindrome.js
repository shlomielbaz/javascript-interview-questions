function longestPolindrome(s) {
    if(!s || s.length <=1) {
        return s;
    }

    let longest = '';
    for (let i=0; i<s.length; i++) {
        const odd = expandFromCenter(s, i, i);
        const even = expandFromCenter(s, i, i + 1);

        const longer = odd.length > even.length ? odd : even;

        if (longer.length > longest.length) {
            longest = longer;
        }
    }

    return longest;
}

function expandFromCenter(s, left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left+1, right);
}

console.log(longestPolindrome('baabaad'))
console.log(longestPolindrome('forgeeksskeegfor'))