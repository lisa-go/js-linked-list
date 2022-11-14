class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        const newNode = new Node(value);
        let current;

        if (this.head == null) {
            this.head = newNode;
        }

        else {
            current = this.head;

            while (current.nextNode) {
                current = current.nextNode;
            }

            current.nextNode = newNode;
            return this;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
        
        return this;
    }

    size() {
        let current = this.head;
        let count = 0;

        while (current != null) {
            count++;
            current = current.nextNode;
        }

        return count;
    }

    heads() {
        let current = this.head;
        return current;
    }

    tails() {
        let current = this.head;

        while (current != null) {
            current = current.nextNode;
            
            if (current.nextNode == null) {
                return current;
            }
        }
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
Link1.prepend('good');
console.log (Link1.size());

console.log (Link1);

console.log (Link1.heads());
console.log (Link1.tails());