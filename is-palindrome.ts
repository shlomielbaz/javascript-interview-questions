function isPalindrome(str: string): boolean {
    // מסיר רווחים, סימנים מיוחדים ומבצע lowercase
    const cleaned = Array.from(str) // טיפול נכון ב־Unicode
        .filter(char => /\p{L}/u.test(char)) // רק תווים אלפבתיים
        .map(char => char.toLowerCase())
        .join('');

    // השוואה של המחרוזת עם ההיפוך שלה
    const reversed = Array.from(cleaned).reverse().join('');
    return cleaned === reversed;
}

// דוגמאות שימוש
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("שלום")); // false
console.log(isPalindrome("אבא")); // true
