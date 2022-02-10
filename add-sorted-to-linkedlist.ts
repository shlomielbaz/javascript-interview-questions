// Add new item to a linked list in  a sorted way

class LinkedListNode {
    value: number;
    next: LinkedListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    private head: LinkedListNode | null = null;

    add(value: number) {
        const node = new LinkedListNode(value);
        if (this.head === null || this.head === undefined) {
            this.head = node;
        }
        else if (this.head.value > node.value) {
            node.next = this.head;
            this.head = node;
        }
        else {
            let current = this.head;
            while (current != null) {
                if (current.next === null) {
                    current.next = node;
                    break;
                }
                else if ((current.value === node.value) || (current.value < node.value && current.next.value > node.value)) {
                    node.next = current.next;
                    current.next = node;
                    break;
                }
                current = current.next;
            }
        }
        this.print();
    }

    print() {
        let current = this.head;
        const view = [];

        while (current != null) {
            view.push(`[${current.value}]`);
            current = current.next;
        }

        view.push('NULL');
        console.log(view.join(' -> '));
    }
}
