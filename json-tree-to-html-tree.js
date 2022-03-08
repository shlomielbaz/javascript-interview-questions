/*
Write a function that gets JSON tree and generate an HTML while each level on the tree indent accordingly, e.g. the JSON
{
    "tag": "ul",
    "children": [
        {
            "tag": "li",
            "text": "item 1"
        },
        {
            "tag": "li",
            "text": "item 2"
        },
        {
            "tag": "li",
            "text": "item 3",
            "children": [
                {
                    "tag": "ul",
                    "children": [
                        {
                            "tag": "li",
                            "text": "item 3.1"
                        },
                        {
                            "tag": "li",
                            "text": "item 3.2"
                        }
                    ]
                }
            ]
        }
    ]
}

will generate the HTML:

<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3
        <ul>
            <li>item 3.1</li>
            <li>item 3.2</li>
        </ul>
    </li>
</ul>

Online demo: https://playcode.io/870129/
*/
var stack = [];

var ul = null;
var level = 1
var data = {
    "tag": "ul",
    "children": [
        {
            "tag": "li",
            "text": "item 1"
        },
        {
            "tag": "li",
            "text": "item 2"
        },
        {
            "tag": "li",
            "text": "item 3",
            "children": [
                {
                    "tag": "ul",
                    "children": [
                        {
                            "tag": "li",
                            "text": "item 3.1"
                        },
                        {
                            "tag": "li",
                            "text": "item 3.2"
                        }
                    ]
                }
            ]
        }
    ]
};

const spaces = (indentation, level) => {
    var space = ''
    var len = indentation * level

    for (var j = 0; j < len; j++) {
        space += ' '
    }

    return space
}


const jsonTreeToHTMLList = (data, indentation, level = 0, result = '') => {
    let ul = data['tag'];
    let space = spaces(indentation, level);
    result += `${space}<${ul}>\n`;
    stack.unshift(`${space}</${ul}>\n`);
    const children = data['children'];
    level = level + 1;
	
    for (let i = 0; i < children.length; i++) {
        let item = children[i];

        let li = item['tag'];
        let text = item['text'];
        space = spaces(indentation, level);


        if ('children' in item) {
            result += `${space}<${li}>${text}\n`;
            stack.unshift(`${space}</${li}>\n`);

            return jsonTreeToHTMLList(item['children'][0], indentation, (level + 1), result);
        }
        else {
          result += `${space}<${li}>${text}</${li}>\n`;
        }
    }
    
    result += stack.join("");
    
    console.log(result);
};

jsonTreeToHTMLList(data, 4)
