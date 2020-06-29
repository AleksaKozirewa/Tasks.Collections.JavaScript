class OneWayListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class OneWayList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value) {

        var node = new OneWayListNode(value);
        current = this.head;

        //пустой список
        if (!current) {
            this.head = node;
            this.length++;
        }

        //не пустой список
        while (current.next) {
            current = current.next;
        }

        current.next = node;
        this.length++;
    }

    remove(value) {
        let current = this.head;
        let previous = null;

        while (current) {
            if (current.value === value) {
                if (previous) {
                    previous.next = current.next;
                }
                else {
                    this.head = current.next;
                }
                current = null;
                this.length--;
                return true;
            }
            previous = current;
            current = current.next;
        }
    }

    addAt(value, index) {
        var node = new OneWayListNode(value);

        if (this.head && index != 0) {
            current = this.head;
            for (var i = 0; i < index - 1; i++) {
                if (!current) {
                    throw new ArgumentOutOfRangeException();
                }
                current = current.next;
            }

            node.next = current.next;
            current.next = node;
        }
        else if (!this.head && index != 0) {
            throw new ArgumentOutOfRangeException();
        }
        else if (index == 0) {
            node.next = this.head;
            this.head = node;
        }
    }

    removeAt(index) {
        current = this.head;
        previous = null;

        while (current) {
            if (index != 0) {
                for (var i = 0; i < index; i++) {
                    previous = current;
                    if (!current || !current.next) {
                        return false;
                    }
                    current = current.next;
                }
                previous.next = current.next;
                return true;
            }
            this.head = this.head.next;
            return true;
        }
        return false;
    }

    getElementByIndex(index) {
        current = this.head;

        while (current) {
            for (var i = 0; i < index; i++) {
                if (!current) {
                    throw new ArgumentOutOfRangeException();
                }

                current = current.next;
            }

            return current.value;
        }

        throw new ArgumentOutOfRangeException();
    }

    operator([index]){
        get
        {
            return GetElementByIndex(index);
        }

        set
        {
            AddAt(value, index);
            RemoveAt(index + 1);
        } 
    }

    sort() {
        if (!this.head) {
            return;
        }

        var node1 = new OneWayListNode(value);
        node1 = this.head;
        var node2 = new OneWayListNode(value);
        node2 = head.next;
        temp;
        doubt = false;

        do {
            doubt = false;
            while (node1 && node1.next) {

                if (node2.value < node1.value) {
                    doubt = true;
                    temp = node1.value;
                    node1.value = node2.value;
                    node2.value = temp;
                }

                node1 = node1.next;
                node2 = node2.next;

            }

            node1 = head;
            node2 = node1.next;

        } while (doubt);
    }

    reverse() {
        if (this.head == null)
            {
                return;
            }

            current = this.head;
            var previous = new OneWayListNode(value);
            previous = null;
            var next = new OneWayListNode(value);
            next = null;

            while (current.next)
            {
                next = current.next;
                current.next = previous;
                previous = current;
                current = next;
            }

            current.next = previous;
            head = current;
    }

    convertToArray() {
        current = head;
        var countOfNodes = 1;

        if (current == null)
        {
            var arr = new int[0];
            return arr;
        }

        while (current.next)
        {
            if (current)
            {
                countOfNodes = countOfNodes + 1;
                current = current.next;
            }
        }

        var array = new int[countOfNodes];
        current = this.head;

        for (var i = 0; i < array.Length; i++)
        {
            array[i] = current.value;
            current = current.next;
        }

        return array;
    }
}






