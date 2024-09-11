function minSubstringContainingAllChars(target) {
    const targetFreq = new Map();
    for (const char of target) {
        targetFreq.set(char, (targetFreq.get(char) || 0) + 1);
    }

    const required = targetFreq.size;
    let windowFreq = new Map();
    let l = 0, r = 0;
    let minLength = Infinity;
    let minSubstring = '';

    while (r < target.length) {
        // Expand the window by including target[r]
        const rightChar = target[r];
        windowFreq.set(rightChar, (windowFreq.get(rightChar) || 0) + 1);

        // Check if the window contains all characters
        let validCount = 0;
        for (const [char, freq] of targetFreq.entries()) {
            if (windowFreq.get(char) >= freq) validCount++;
        }

        // Contract the window by moving left pointer
        while (validCount === required) {
            const currentLength = r - l + 1;
            if (currentLength < minLength) {
                minLength = currentLength;
                minSubstring = target.substring(l, r + 1);
            }

            const leftChar = target[l];
            windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);
            if (windowFreq.get(leftChar) < targetFreq.get(leftChar)) validCount--;
            l++;
        }

        r++;
    }

    return minSubstring;
}

// Example usage:
console.log(minSubstringContainingAllChars("aaabbbc")); // Output: "abbbc"
console.log(minSubstringContainingAllChars("abccccccaaabbba")); // Output: "caaab"
