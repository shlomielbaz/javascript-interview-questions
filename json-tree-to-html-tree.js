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

Online demos: 
	https://playcode.io/870129/
	https://onecompiler.com/javascript/3xvgm84pr
*/
const data = {
	tag: 'ol',
	children: [
		{
			tag: 'li',
			text: 'item 1',
		},
		{
			tag: 'li',
			text: 'item 2',
		},
		{
			tag: 'li',
			text: 'item 3',
			children: [
				{
					tag: 'ul',
					children: [
						{
							tag: 'li',
							text: 'item 3.1',
						},
						{
							tag: 'li',
							text: 'item 3.2',
						},
						{
							tag: 'li',
							text: 'item 3.3',
						},
						{
							tag: 'li',
							text: 'item 3.4',
							children: [
								{
									tag: 'ul',
									children: [
										{
											tag: 'li',
											text: 'item 3.4.1',
										},
										{
											tag: 'li',
											text: 'item 3.4.2',
										},
										{
											tag: 'li',
											text: 'item 3.4.3',
										},
										{
											tag: 'li',
											text: 'item 3.4.4',
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
};

let result = '';
const stack = [];

const spaces = (indentation, level) => {
	var space = '';
	var len = indentation * level;

	for (var j = 0; j < len; j++) {
		space += ' ';
	}

	return space;
};

const jsonTreeToHTMLList = (data, indentation, level = 0) => {
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

			return jsonTreeToHTMLList(
				item['children'][0],
				indentation,
				(level + 1),
				result
			);
		} else {
			result += `${space}<${li}>${text}</${li}>\n`;
		}
	}

	result += stack.join('');

	console.log(result);
};

jsonTreeToHTMLList(data, 4);
