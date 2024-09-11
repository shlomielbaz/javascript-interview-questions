function palindrom(str) {
    let s = 0;
    let e = str.length - 1;

    while(s < e) {
        if (str.charAt(s) === str.charAt(e)) {
            s = s + 1;
            e = e -1;
        }
        else {
            return false;
        }
    }

    return true;
}

console.log(`is level is palindroem ${palindrom('level')}`)

console.log(`is leval is palindroem ${palindrom('leval')}`)

console.log(`is a is palindroem ${palindrom('a')}`)

console.log(`is aa is palindroem ${palindrom('aa')}`)

console.log(`is abcdef is palindroem ${palindrom('abcdef')}`)
