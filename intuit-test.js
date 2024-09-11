function saveInput(text){
    console.log('Saving data', text);
}

const processChange = debounce((text) => saveInput(text));

function debounce(func) {
   let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), 1000);
    }
}

processChange("h");
processChange("he");
processChange("hel");
processChange("hell");
processChange("hello");