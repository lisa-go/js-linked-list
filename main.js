class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        const newNode = new Node(value);
        var current;

        if (this.head == null) {
            this.head = newNode;
        }
        else {
            current = this.head;

            while (current.nextNode) {
                current = current.nextNode;
            }

            current.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);

        if (this.head = value)  
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

Node1 = new Node('poop');
Node2 = new Node('pee');
Node3 = new Node('wha');

Node1.nextNode = Node2;
Node2.nextNode = Node3;

console.log (Node1)

Link1 = new LinkedList(Node1);
Link1.append('hello');

console.log (Link1);