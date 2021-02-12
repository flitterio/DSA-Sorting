class _Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item){
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while(tempNode.next !== null){
                tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
        }
    }
    find(item) {
        let currNode = this.head;

        if (!this.head){
            return null;
        }

        while (currNode.value !== item) {
            if(currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }

        return currNode;
    }

    remove(item) {
        if (!this.head){
            return null;
        }

        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;

        let previousNode = this.head;

        while((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null){
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(item, nodeWantItToBeBefore){
        if (this.head === null || this.head.next === null && this.head !== nodeWantItToBeBefore) {
            this.insertLast(item);
        }
        else {
            let tempNode = this.head;
            let nextNode = this.head.next;
            while(tempNode.next.value !== nodeWantItToBeBefore){
                    tempNode = tempNode.next;
                    nextNode = nextNode.next;
            }
        tempNode.next = new _Node(item, nextNode); 
        }
    }

    insertAfter(item, nodeToInsertAfter){
        if(this.head === null){
            return  this.insertFirst(item)
        }
        else{
          const currNode = this.find(nodeToInsertAfter);
            currNode.next = new _Node(item, currNode.next.next)
        }

    }

    insertAt(item, position){
        if(this.head === null){
            return this.insertFirst(item)
        }
        else{
        let node = this.head;
        let nextNode = this.head.next;
        if(position === 1){
            this.insertFirst(item)
        }

        for(let i = 2; i < position; i++){
            if(nextNode === null){
                return 'position does not exist'
            }
            node = node.next;
            nextNode = nextNode.next;
        }   
        node.next = new _Node(item, nextNode);
        }
    }

}

function display(list) {
    if (list.head === null) {
        return 'Empty List';
    }
    else {
        let tempNode = list.head;
        let listedList = []
        while(tempNode.next !== null){
            listedList.push(tempNode);
            tempNode = tempNode.next;
    }
    return listedList;
    }
}

function middle(list){
    let fast = list.head;
    let slow = list.head;
 
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
 }

 function findPrevious(list, item) {
    let currNode = list.head;

    if (!list.head){
        return 'Empty List';
    }

    while (currNode.next.value !== item) {
        if(currNode.next === null) {
            return 'No Previous Item Exists';
        }
        else {
            currNode = currNode.next;
        }
    }

    return 'The Previous Node is: ' + currNode.value;
}

function findLast(list) {
    let currNode = list.head;

    if (!list.head){
        return 'Empty List';
    }

    while (currNode.next !== null) {
            currNode = currNode.next;
    }

    return currNode;
}

function size(list) {
    let count = 0;
    let node = list.head;
    while(node){
        count++;
        node = node.next
    }
    return count;
}

function mSort(list){
    //base case
    if (list.next === null){
        return list;
    }
//splits into two linked lists (left and right)
    let mid = middle(list);
    console.log('mid', mid)
    let rightNode = mid.next;
    let right = new LinkedList();
        while(rightNode !== null){
            console.log('in while loop', rightNode)
            right.insertFirst(rightNode)
            rightNode = rightNode.next
        }

    let tempnode = list.head
    mid.next = null;
    let left = new LinkedList();
        while(tempnode.next !== null){
            left.insertFirst(tempnode);
            tempnode = tempnode.next
        }

    left = mSort(left);
    right = mSort(right);
    console.log(left, right)
    return merge(left, right);

}

function merge(left, right){
    console.log('merge called')
    let leftNode = left.head;
    let rightNode = right.head;
    let sorted = new LinkedList();
    // let leftIndex = 0;
    // let rightIndex = 0;
    // let outputIndex = 0;
//need to compare nodes and find the greater value, then add that to the linked list using insertFirst
    while(leftNode.next !== null && rightNode.next !== null){
        if(leftNode > rightNode){
            sorted.insertFirst(leftNode)
            leftNode = leftNode.next
        }
        else {
            sorted.insertFirst(rightNode)
            rightNode = rightNode.next
        }
    }
    return sorted;
    // while (leftIndex < size(left) && rightIndex < size(right)){

    //     if(left[leftIndex] < right[rightIndex]){
    //         array[outputIndex++] = left[leftIndex++];
    //     } else {
    //         array[outputIndex++] = right[rightIndex++];
    //     }
    // }

    // for(let i = leftIndex; i< left.length; i++){
    //     array[outputIndex] == left[i];
    // }
    // for(let i = rightIndex; i< right.length; i++){
    //     array[outputIndex] == right[i];
    // }

    // return array;
}

const test = new LinkedList();

test.insertFirst(1);
test.insertFirst(19);
test.insertFirst(3);
test.insertFirst(2);
test.insertFirst(40);
test.insertFirst(54);
test.insertFirst(13);
test.insertFirst(23);
test.insertFirst(5);

console.log(mSort(test));


//console.log(middle(test))