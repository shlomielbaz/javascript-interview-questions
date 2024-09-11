function LCSubStr( X,  Y , m , n) {
    // Create a table to store
    // lengths of longest common
    // suffixes of substrings.
    // Note that LCSuff[i][j]
    // contains length of longest
    // common suffix of
    // X[0..i-1] and Y[0..j-1].
    // The first row and first
    // column entries have no
    // logical meaning, they are
    // used only for simplicity of program
     
    var LCStuff = 
    Array(m + 1).fill().map(()=>Array(n + 1).fill(0));

    // To store length of the longest
    // common substring
    var result = 0;

    // Following steps build
    // LCSuff[m+1][n+1] in bottom up fashion
    for (i = 0; i <= m; i++) {
        for (j = 0; j <= n; j++) {
            if (i == 0 || j == 0)
                LCStuff[i][j] = 0;
            else if (X[i - 1] == Y[j - 1]) {
                LCStuff[i][j] = LCStuff[i - 1][j - 1] + 1;
                result = Math.max(result, LCStuff[i][j]);
            } else
                LCStuff[i][j] = 0;
        }
    }
    return result;
}