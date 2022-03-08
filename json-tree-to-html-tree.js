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

var opens = [];
var closes = [];

var ul = null;
var level = 1;
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
	var space = '';
	var len = indentation * level;

	for (var j = 0; j < len; j++) {
		space += ' ';
	}

	return space;
};

const jsonTreeToHTMLList = (data, indentation, level = 0) => {
	var ul = data['tag'];
	let space = spaces(indentation, level);

	opens.push(`${space}<${ul}>\n`);
	closes.push(`${space}</${ul}>\n`);

	const children = data['children'];

	level = level + 1;
	for (let i = 0; i < children.length; i++) {
		let item = children[i];

		let li = item['tag'];
		let text = item['text'];
		space = spaces(indentation, level);

		if ('children' in item) {
			opens.push(`${space}<${li}>${text}\n`);
			closes.push(`${space}</${li}>\n`);

			return jsonTreeToHTMLList(
				item['children'][0],
				indentation,
				level + 1
			);
		} else {
			opens.push(`${space}<${li}>${text}</${li}>\n`);
		}
	}

	let result = '';
	for (var idx = 0; idx < opens.length; idx++) {
		result += opens[idx];
	}
	for (var idx = closes.length - 1; idx >= 0; idx--) {
		result += closes[idx];
	}
	console.log(result);
};

jsonTreeToHTMLList(data, 4);
