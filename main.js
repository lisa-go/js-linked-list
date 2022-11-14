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

    at(index) {
        let current = this.head;
        let count = 0;

        while (current != null) {
            current = current.nextNode;
            count++;
            if (count == index) {
                return current;
            }
        }

        return this.head;
    }

    pop() {
        if (this.head == null) {
            return undefined;
        }
        else if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            let temp = this.head;
            let pre = this.head;
            while (temp.nextNode) {
                pre = temp;
                temp = temp.nextNode;
            }
            this.tail = pre;
            this.tail.nextNode = null;
        }
        return;  
    }

    contains(value) {
        let current = this.head;

        while (current != null) {
            if (current.value == value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let count = 0;

        while (current != null) {
            if (current.value == value) {
            return count;
            }
            count++;
            current = current.nextNode;
        }
        return null;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

Node1 = new Node('ant');
Node2 = new Node('bee');
Node3 = new Node('cat');

Node1.nextNode = Node2;
Node2.nextNode = Node3;

//console.log (Node1)

Link1 = new LinkedList(Node1);
Link1.append('dog');
Link1.prepend('elephant');
/* console.log (Link1.size());

console.log (Link1);

console.log (Link1.heads());
console.log (Link1.tails());

console.log (Link1.at(3));

Link1.pop(); */

console.log (Link1.find('firefly'));
